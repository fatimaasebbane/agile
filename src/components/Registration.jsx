// Importez les modules et composants nécessaires
import React, { useState } from "react";
import Axios from "axios";
import Footer from "../components/footer";
import Header from "../components/navbar";

// Définissez le composant Registration
const Registration = () => {
  const [somme, setSomme] = useState(0);
  const [type, setType] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [nom, setNom] = useState("");
  const [fonction, setFunction] = useState("");
  const [mail, setMail] = useState("");

  // Fonction pour gérer le changement de la sélection du type
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "participant ordinaire") {
      setType(selectedValue);
      setSomme(500);
    } else if (selectedValue === "conference") {
      setType(selectedValue);
      setSomme(700);
    } else if (selectedValue === "postère") {
      setType(selectedValue);
      setSomme(900);
    } else {
      setType("");
      setSomme(0);
    }
  };

  // Fonction pour gérer le changement de fichier
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setPdfFile(selectedFile);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("mail", mail);
      formData.append("fonction", fonction);
      formData.append("type", type);
      if (pdfFile) {
        formData.append("pdf", pdfFile);
      }

      const response = await Axios.post("http://localhost:8080/insertParticipant", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  // Retournez la structure JSX du composant
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap hero-cap2 text-center">
                                <h2>Registration</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<br /><br /><br /><br /><br /><br /><br /><br />
      <form
        className="form-contact contact_form"
        action="contact_process.php"
        method="post"
        id="contactForm"
        noValidate="novalidate"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control valid"
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => {
                  setNom(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control valid"
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control"
                name="fonction"
                id="fonction"
                type="text"
                placeholder="Enter Function"
                onChange={(e) => {
                  setFunction(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
<div className="row">
        <div className="col-md-6">
          <select name="select" id="select" onChange={handleSelectChange} style={{ width: "100%", padding: "15px" }}>
            <option value=""></option>
            <option value="participant ordinaire">Participant ordinaire</option>
            <option value="conference">Conference</option>
            <option value="postère">Postère</option>
          </select>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              className="form-control"
              name="subject"
              id="subject"
              type="text"
              placeholder=""
              disabled={true}
              value={somme}
            />
          </div>
        </div>
</div>
        {type !== "participant ordinaire" && type !== "" && (
          <div className="col-12">
            <input type="file" accept=".pdf" onChange={handleFileChange} className="form-control" />
          </div>
        )}

        <div></div>
        <div className="form-group mt-3">
          <button type="submit" className="button button-contactForm boxed-btn" style={{textAlign:"center"}}>
            Send
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Registration;
