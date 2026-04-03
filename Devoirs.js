// =============================
// COMPOSANT REACT - DEVOIRS (ULTRA STYLÉ / CODE ONLY)
// =============================

import React from "react";

const devoirs = [
    { matiere: "Français", titre: "Évaluation de lecture du livre 'Grrrrr'.", date: "2026-03-04", fait: true },
    { matiere: "Histoire", titre: "Prendre le matériel de géographie", date: "2026-04-01", fait: true }
];

const couleurs = {
    Maths: "#ef4444",
    Français: "#3b82f6",
    Histoire: "#f59e0b",
    Anglais: "#10b981"
};

export default function Devoirs() {

    function estEnRetard(date, fait) {
        return new Date(date) < new Date().setHours(0,0,0,0) && !fait;
    }

    return (
        <div style={{
            padding: "30px",
            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            minHeight: "100vh",
            color: "white"
        }}>

            <h1 style={{ marginBottom: "30px", fontSize: "28px" }}>
                📚 Mes devoirs
            </h1>

            {devoirs
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((d, index) => {

                    const couleur = couleurs[d.matiere] || "#3b82f6";
                    const retard = estEnRetard(d.date, d.fait);

                    return (
                        <div key={index}
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(10px)",
                                border: `1px solid ${retard ? "red" : couleur}`,
                                borderLeft: `6px solid ${retard ? "red" : couleur}`,
                                padding: "15px",
                                marginBottom: "15px",
                                borderRadius: "12px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                transition: "0.2s",
                                opacity: d.fait ? 0.4 : 1
                            }}
                        >

                            <div>
                                <div style={{
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    color: couleur
                                }}>
                                    {d.matiere}
                                </div>

                                <div style={{ fontSize: "15px" }}>
                                    {d.titre}
                                </div>

                                <div style={{
                                    fontSize: "12px",
                                    color: retard ? "#f87171" : "#94a3b8"
                                }}>
                                    {retard ? "En retard" : "À rendre le " + d.date}
                                </div>
                            </div>

                            <div style={{ fontSize: "20px" }}>
                                {d.fait ? "✔" : "🕒"}
                            </div>

                        </div>
                    );
                })}

        </div>
    );
}

// =============================
// COMMENT AJOUTER UN DEVOIR
// =============================

/*

👉 Tu ajoutes directement ici :

const devoirs = [
    {
        matiere: "Anglais",
        titre: "Apprendre le vocabulaire",
        date: "2026-04-10",
        fait: false
    }
];


AUCUN INPUT DANS L'APP
Tout se fait dans le code ✔

*/