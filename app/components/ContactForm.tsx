"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setStatus("Preencha todos os campos antes de enviar.");
      return;
    }

    const text = `Olá, The Vision Studio!%0A%0A` +
      `Nome: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Telefone: ${encodeURIComponent(phone)}%0A%0A` +
      `Mensagem:%0A${encodeURIComponent(message)}`;

    window.open(`https://wa.me/244975912613?text=${text}`, "_blank");
    setStatus("Mensagem enviada com sucesso via WhatsApp.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Nome completo
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
          />
        </label>
      </div>

      <div className="field-row two-cols">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Telefone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="975 912 613"
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Mensagem
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Descreva o seu projeto..."
            rows={5}
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary form-btn">
        Enviar mensagem
      </button>

      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
