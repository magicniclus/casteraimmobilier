// lib/database.ts
import { push, ref, remove, set } from "firebase/database";
import { database } from "./firebase.config";

/**
 * Fonction pour ajouter des données à une route spécifique dans la Firebase Realtime Database.
 * @param route - La route où les données doivent être ajoutées
 * @param data - Les données à ajouter
 * @returns L'ID des données ajoutées
 */
export const addData = async (route: string, data: any): Promise<string> => {
  try {
    const dataRef = ref(database, route);
    const newDataRef = push(dataRef); // Génère un nouvel ID automatiquement

    // Obtient la date et l'heure actuelle en version française
    const now = new Date();
    const createdAt = now.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Ajoute la date de création aux données
    const newData = {
      ...data,
      createdAt,
    };

    await set(newDataRef, newData); // Ajoute les données à la base de données
    return newDataRef.key || ""; // Retourne l'ID des données ajoutées
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
};

/**
 * Fonction pour supprimer un élément spécifique dans la Firebase Realtime Database.
 * @param route - La route où l'élément doit être supprimé
 * @param id - L'ID de l'élément à supprimer
 * @returns Une promesse résolue en cas de succès ou une erreur en cas d'échec
 */
export const deleteData = async (route: string, id: string): Promise<void> => {
  try {
    const itemRef = ref(database, `${route}/${id}`); // Référence à l'élément à supprimer
    await remove(itemRef); // Supprime l'élément de la base de données
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error; // Relance l'erreur pour être gérée par l'appelant
  }
};
