
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const appUrl = Deno.env.get("APP_URL") || "http://localhost:5173";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { email, confirmationUrl } = await req.json()

    // Validate input
    if (!email || !confirmationUrl) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    console.log(`Sending verification email to ${email} with confirmation URL: ${confirmationUrl}`)

    const emailResponse = await resend.emails.send({
      from: "Agile Sprint Manager <onboarding@resend.dev>",
      to: [email],
      subject: "Verify your email for Agile Sprint Manager",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Verify your email</h1>
          <p style="margin: 16px 0; font-size: 16px; line-height: 1.5;">
            Thank you for signing up for Agile Sprint Manager. To complete your registration, please click the button below to verify your email address.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="${confirmationUrl}" 
               style="background-color: #4f46e5; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold;">
              Verify Email
            </a>
          </div>
          <p style="margin: 16px 0; font-size: 16px; line-height: 1.5;">
            If you didn't create an account with us, you can safely ignore this email.
          </p>
          <p style="margin: 16px 0; font-size: 16px; line-height: 1.5;">
            If the button above doesn't work, copy and paste this URL into your browser:
          </p>
          <p style="margin: 16px 0; font-size: 14px; line-height: 1.5; word-break: break-all; background-color: #f3f4f6; padding: 8px; border-radius: 4px;">
            ${confirmationUrl}
          </p>
        </div>
      `,
    });

    console.log("Email response:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Verification email sent successfully" }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Error sending verification email:', error.message)
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
