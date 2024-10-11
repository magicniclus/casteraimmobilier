import { format } from "date-fns";
import { fr } from "date-fns/locale";
import * as React from "react";

// Définition de l'interface pour les props
interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  message: string;
}

// Ajout du formatage pour inclure l'heure
const currentDate = format(new Date(), "dd/MM/yyyy HH:mm", { locale: fr });

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
  postalCode,
  message,
}) => {
  return (
    <div>
      <h2>Nouveau contact reçu :</h2>
      <p>Date : {currentDate}</p>
      <ul>
        <li>
          <strong>Nom :</strong> {name}
        </li>
        <li>
          <strong>Email :</strong> {email}
        </li>
        <li>
          <strong>Téléphone :</strong> {phone}
        </li>
        <li>
          <strong>Code Postal :</strong> {postalCode}
        </li>
      </ul>
      <div style={{ marginTop: "20px" }}>
        <h3>Message :</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};
