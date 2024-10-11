import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      postalCode: "",
      message: "",
    };
    const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(0|\+33)[1-9](\d{2}){4}$/;
    const postalCodeRegex = /^\d{5}$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Nom invalide";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Numéro de téléphone invalide";
    }
    if (!postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode = "Code postal invalide";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Le message ne peut pas être vide";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setSuccessMessage("");
      setErrorMessage("");

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setSuccessMessage("Formulaire envoyé avec succès");
          setFormData({
            name: "",
            email: "",
            phone: "",
            postalCode: "",
            message: "",
          });
          setErrors({
            name: "",
            email: "",
            phone: "",
            postalCode: "",
            message: "",
          });
        } else {
          setErrorMessage(
            data.message || "Erreur lors de l'envoi du formulaire"
          );
        }
      } catch (error) {
        setErrorMessage("Erreur de réseau, veuillez réessayer plus tard");
      } finally {
        setLoading(false);
      }
    } else {
      setErrorMessage("Veuillez corriger les erreurs avant de soumettre");
    }
  };

  return (
    <section className="w-full" id="contact">
      <div className="w-full max-w-6xl mx-auto p-6 rounded-lg bg-white">
        <div className="relative max-w-max mx-auto text-3xl">
          <h2 className="text-gray-700 text-center">
            <span className="sm:hidden block text-[#947a2f]/60 text-xl font-light font-updock">
              Votre projet
            </span>
            Contactez-nous
          </h2>
          <h3 className="font-light font-updock text-[#947a2f]/60 absolute -right-10 -bottom-7 sm:block hidden">
            Votre projet
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 px-4 py-2 block w-full rounded-md border border-gray-500 shadow-sm focus:border-[#947a2f] focus:ring-[#947a2f] text-lg"
                placeholder="Votre nom"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 px-4 py-2 block w-full rounded-md border border-gray-500 shadow-sm focus:border-[#947a2f] focus:ring-[#947a2f] text-lg"
                placeholder="Votre email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 px-4 py-2 block w-full rounded-md border border-gray-500 shadow-sm focus:border-[#947a2f] focus:ring-[#947a2f] text-lg"
                placeholder="Votre téléphone"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Code Postal
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="mt-1 px-4 py-2 block w-full rounded-md border border-gray-500 shadow-sm focus:border-[#947a2f] focus:ring-[#947a2f] text-lg"
                placeholder="Votre code postal"
                required
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 px-4 py-2 block w-full min-h-[200px] rounded-md border border-gray-500 shadow-sm focus:border-[#947a2f] focus:ring-[#947a2f] text-lg"
              placeholder="Votre message"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          {loading && (
            <p className="text-yellow-500 text-sm text-center">
              Envoi en cours...
            </p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm text-center">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#947a2f] hover:bg-white hover:text-[#947a2f] hover:border hover:border-[#947a2f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#947a2f] transition duration-300 ease-in-out"
              disabled={loading}
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
