/* global process */
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        message: "Method not allowed.",
      });
    }
  
    try {
      const { name, email, message } = req.body || {};
  
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: "Please complete all fields.",
        });
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailPattern.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address.",
        });
      }
  
      const resendResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["haardp9@gmail.com"],
            reply_to: email,
            subject: `Portfolio message from ${name}`,
            text: `
  New message from your portfolio.
  
  Name: ${name}
  Email: ${email}
  
  Message:
  ${message}
            `.trim(),
          }),
        }
      );
  
      const resendData = await resendResponse.json();
  
      if (!resendResponse.ok) {
        console.error("Resend error:", resendData);
  
        return res.status(500).json({
          success: false,
          message: "Unable to send the message.",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Message sent successfully.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
  
      return res.status(500).json({
        success: false,
        message: "Something went wrong.",
      });
    }
  }