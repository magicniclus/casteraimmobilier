import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  User,
} from "firebase/auth"; // Importation des fonctions d'authentification Firebase nécessaires
import { auth } from "./firebase.config"; // Importation de l'authentification Firebase initialisée

/**
 * Fonction pour créer un compte utilisateur avec Firebase Authentication.
 * @param email - L'email de l'utilisateur
 * @param password - Le mot de passe de l'utilisateur
 * @returns L'utilisateur créé ou une erreur en cas d'échec
 */
export const signUp = async (email: string, password: string) => {
  try {
    // Utilise la fonction Firebase createUserWithEmailAndPassword pour créer un utilisateur
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user; // Retourne l'utilisateur créé
  } catch (error) {
    console.error("Error creating new user:", error); // Affiche une erreur en cas d'échec
    throw error; // Relance l'erreur pour être gérée par l'appelant
  }
};

/**
 * Fonction pour supprimer un compte utilisateur avec Firebase Authentication.
 * @param uid - L'UID de l'utilisateur à supprimer
 * @returns Une promesse résolue en cas de succès ou une erreur en cas d'échec
 */
export const deleteAccount = async (uid: string) => {
  try {
    const user = getAuth().currentUser; // Récupère l'utilisateur actuellement connecté
    if (user && user.uid === uid) {
      await deleteUser(user); // Supprime l'utilisateur
    } else {
      throw new Error("User not authenticated or UID does not match");
    }
  } catch (error) {
    console.error("Error deleting user:", error); // Affiche une erreur en cas d'échec
    throw error; // Relance l'erreur pour être gérée par l'appelant
  }
};

/**
 * Fonction pour obtenir les informations de l'utilisateur connecté grâce à son ID.
 * @returns Une promesse résolue avec les informations de l'utilisateur connecté ou une erreur en cas d'échec
 */
export const getUserInfo = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const authInstance = getAuth();

    onAuthStateChanged(
      authInstance,
      (user) => {
        if (user) {
          resolve(user); // Retourne les informations de l'utilisateur connecté
        } else {
          resolve(null); // Retourne null si aucun utilisateur n'est connecté
        }
      },
      (error) => {
        reject(error); // Relance l'erreur pour être gérée par l'appelant
      }
    );
  });
};

/**
 * Fonction pour envoyer un email de réinitialisation de mot de passe.
 * @param email - L'email de l'utilisateur
 * @returns Une promesse résolue en cas de succès ou une erreur en cas d'échec
 */
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
};

/**
 * Fonction pour déconnecter l'utilisateur.
 * @returns Une promesse résolue en cas de succès ou une erreur en cas d'échec
 */
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};
