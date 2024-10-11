import sgMail from "@sendgrid/mail";
import ReactDOMServer from "react-dom/server";
import { EmailTemplate } from "../../src/components/email/EmailTemplate";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, phone, postalCode, message } = req.body;

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        name={name}
        email={email}
        phone={phone}
        postalCode={postalCode}
        message={message}
      />
    );

    const msg = {
      to: ["casteranicolas.contact@gmail.com"],
      from: "nouveaucontact@prospect-manager.fr",
      subject: "Nouvelle demande de contact reçue !",
      html: emailContent,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error("Erreur SendGrid:", error.response?.body);
      res.status(400).json({
        message: "Erreur lors de l'envoi de l'email.",
        details: error.response?.body,
      });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: error.message, stack: error.stack });
  }
};
