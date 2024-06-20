import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
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
    if (!validateEmail(email)) {
      throw new Error("Invalid email format");
    }

    if (!validatePassword(password)) {
      throw new Error("Password does not meet the criteria");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
};

/**
 * Fonction pour connecter un utilisateur avec Firebase Authentication.
 * @param email - L'email de l'utilisateur
 * @param password - Le mot de passe de l'utilisateur
 * @returns L'utilisateur connecté ou une erreur en cas d'échec
 */
export const signIn = async (email: string, password: string) => {
  try {
    if (!validateEmail(email)) {
      throw new Error("Invalid email format");
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in user:", error);
    throw error;
  }
};

/**
 * Fonction pour supprimer un compte utilisateur avec Firebase Authentication.
 * @param uid - L'UID de l'utilisateur à supprimer
 * @returns Une promesse résolue en cas de succès ou une erreur en cas d'échec
 */
export const deleteAccount = async (uid: string) => {
  try {
    const user = getAuth().currentUser;
    if (user && user.uid === uid) {
      await deleteUser(user);
    } else {
      throw new Error("User not authenticated or UID does not match");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
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
          resolve(user);
        } else {
          resolve(null);
        }
      },
      (error) => {
        reject(error);
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
    if (!validateEmail(email)) {
      throw new Error("Invalid email format");
    }

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

/**
 * Fonction pour vérifier si un utilisateur est connecté.
 * @returns Une promesse résolue avec un booléen indiquant si un utilisateur est actuellement connecté
 */
export const isUserLoggedIn = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const authInstance = getAuth();
    onAuthStateChanged(authInstance, (user) => {
      resolve(!!user);
    });
  });
};
/**
 * Fonction pour valider le format de l'email.
 * @param email - L'email à valider
 * @returns Un booléen indiquant si l'email est valide ou non
 */
const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Fonction pour valider les critères du mot de passe.
 * @param password - Le mot de passe à valider
 * @returns Un booléen indiquant si le mot de passe est valide ou non
 */
const validatePassword = (password: string): boolean => {
  // Par exemple, le mot de passe doit contenir au moins 6 caractères
  return password.length >= 6;
};
