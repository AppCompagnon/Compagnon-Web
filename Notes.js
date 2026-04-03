import React, { useState } from "react";

export default function Notes() {

  // =========================
  // 📊 TES NOTES (modifiable ici)
  // =========================
  const data = {
    Math: [
      { nom: "Aires", note: 16.5, bareme: 25, min: 4.5, max: 25, coef: 2 },
      { nom: "Division euclidienne", note: 17.5, bareme: 20, min: 6.5, max: 20, coef: 2 },
      { nom: "Périmètres", note: 21, bareme: 25, min: 6.5, max: 24.5, coef: 1 },
    ],
    Français: [
      { nom: "exposé oral", note: "Non évalué", bareme: 20, min: 14, max: 20, coef: 1 },
      { nom: "lire un roman", note: 9, bareme: 20, min: 6, max: 20, coef: 1 },
      { nom: "imparfait, passé composé", note: 16, bareme: 20, min: 2.5, max: 19, coef: 1 }
    ],
    Histoire: [
      { nom: "Contrôle de Géographie Partie 1", note: 20, bareme: 20, min: 20, max: 20, coef: 1 },
    ],
    Anglais: [
      { nom: "WH questions", note: 10, bareme: 10, min: 3.5, max: 10, coef: 1 },
    ],
    Physique: [
      { nom: "Expérience la masse", note: 18, bareme: 19, min: 6, max: 19, coef: 1 },
      { nom: "Évaluation mouvements", note: 16, bareme: 20, min: 1, max: 20, coef: 1 }
    ],
    SVT: [
      { nom: "Contrôle", note: 10, bareme: 20, min: 0, max: 20, coef: 1 },
      { nom: "Dessin ovule", note: 17, bareme: 20, min: 7, max: 20, coef: 1 },
      { nom: "Graphique criquet", note: 20, bareme: 20, min: 2, max: 20, coef: 1 },
    ],
    EPS: [
      { nom: "Tennis de table", note: "Non évalué", bareme: 20, min: "-", max: "-", coef: 1 },
      { nom: "VTT", note: "Non évalué", bareme: 20, min: "-", max: "-", coef: 1 },
    ],
    Arts: [
      { nom: "Boîte à rêves", note: 7.86, bareme: 20, min: 4.29, max: 20, coef: 1 },
    ]
  };

  // =========================
  // 🧾 BULLETIN (modifiable ici)
  // =========================
  const bulletin = {
    Math: { moyenne: 17.4, appreciation: "Groupe 1/4 Excellent trimestre. Lilyan travaille sérieusement. Il faudra poursuivre ainsi tout en essayant de participer en classe. " },
    Français: { moyenne: 15.8, appreciation: "Lilyan se montre toujours attentif et appliqué: très bien. Il pourrait aussi oser participer à l'oral." },
    Histoire: { moyenne: 14.8, appreciation: "Lilyan a très bien évolué ce trimestre. Toujours sérieux il s'est montré plus volontaire et plus régulier dans son travail. Les résultats sont donc en baisse mais satisfaisants malgré tout Il faut poursuivre ainsi car c'est très bien." },
    Anglais: { moyenne: 19.9, appreciation: "Excellent trimestre à l'écrit. Il faut désormais réinvestir ses connaissances en participant davantage à l'oral." },
    Physique: { moyenne: 16.4, appreciation: "Un excellent trimestre , du sérieux et de l'application , il faut poursuivre ainsi. " },
    SVT: { moyenne: 16.1, appreciation: "Un très bon bilan trimestriel pour Lilyan qui est toujours aussi sérieux et actif à l'oral. Il faut poursuivre ainsi." },
    EPS: { moyenne: 12.8, appreciation: "Lilyan essaye toujours de bien faire, les compétences sont globalement bien maîtriser mais tout comme au premier trimestreil faudrait qu'il ose demander de l'aide si nécessaire." },
    Arts: { moyenne: 11.5, appreciation: "Les résultats sont moyens mais Lilyan a fait des efforts pour réaliser le travail." },
    Musique: { moyenne: 17.6, appreciation: "De très bons résultats encore ce trimestre. Le travail est sérieux et régulier. Bravo. N'hésite pas à t'impliquer encore plus à l'oral. " },
    generale: 15.8
  };

  const [selected, setSelected] = useState(null);
  const [modeBulletin, setModeBulletin] = useState(false);

  const isValid = (note) => typeof note === "number";

  const arrondi = (val) => (Math.round(val * 10) / 10).toFixed(1);

  const formatNote = (note) => {
    if (!isValid(note)) return note;
    return note % 1 === 0 ? note : note.toFixed(1);
  };

  const noteSur20 = (note, bareme) => (note / bareme) * 20;

  // 🎨 COULEUR SELON MOYENNE
  const getColor = (val) => {
    if (val >= 18.5) return "#00ca4a"; // vert foncé
    if (val >= 16) return "#22c55e"; // vert
    if (val >= 14) return "#eab308"; // jaune foncé
    if (val >= 10) return "#f59e0b"; // orange
    if (val >= 5) return "#ef4444"; // rouge foncé
    return "#ff0000"; // rouge
  };

  const moyenneMatiere = (notes) => {
    let total = 0;
    let coef = 0;

    notes.forEach((n) => {
      if (isValid(n.note)) {
        total += noteSur20(n.note, n.bareme) * n.coef;
        coef += n.coef;
      }
    });

    return coef === 0 ? "-" : parseFloat(arrondi(total / coef));
  };

  const moyenneGenerale = () => {
    let total = 0;
    let coef = 0;

    Object.values(data).forEach((matiere) => {
      matiere.forEach((n) => {
        if (isValid(n.note)) {
          total += noteSur20(n.note, n.bareme) * n.coef;
          coef += n.coef;
        }
      });
    });

    return coef === 0 ? "-" : parseFloat(arrondi(total / coef));
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>

      {/* SWITCH */}
      <button
        onClick={() => setModeBulletin(!modeBulletin)}
        style={{
          marginBottom: 20,
          padding: "10px 20px",
          borderRadius: 10,
          cursor: "pointer"
        }}
      >
        {modeBulletin ? "Voir les notes" : "Voir le bulletin"}
      </button>

      {/* ================= NOTES ================= */}
      {!modeBulletin && (
        <>
          <h1>Notes</h1>

          <h2 style={{ color: getColor(moyenneGenerale()) }}>
            Moyenne générale : {moyenneGenerale()}/20
          </h2>

          {Object.entries(data).map(([matiere, notes]) => {
            const moy = moyenneMatiere(notes);

            return (
              <div
                key={matiere}
                style={{
                  marginBottom: 25,
                  padding: 20,
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
                }}
              >
                <h2 style={{ color: getColor(moy) }}>
                  {matiere} — {moy}/20
                </h2>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {notes.map((n, i) => (
                    <div
                      key={i}
                      onClick={() => setSelected(n)}
                      style={{
                        padding: 12,
                        borderRadius: 10,
                        cursor: "pointer",
                        background: isValid(n.note) ? "#f1f5f9" : "#fee2e2"
                      }}
                    >
                      <strong>
                        {isValid(n.note)
                          ? `${formatNote(n.note)}/${n.bareme}` +
                            (n.bareme !== 20
                              ? ` (${arrondi(noteSur20(n.note, n.bareme))}/20)`
                              : "")
                          : n.note}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* ================= BULLETIN ================= */}
      {modeBulletin && (
        <>
          <h1>Bulletin</h1>

          <h2 style={{ color: getColor(bulletin.generale) }}>
            Moyenne générale : {bulletin.generale}/20
          </h2>

          {Object.entries(bulletin).map(([matiere, infos]) => {
            if (matiere === "generale") return null;

            return (
              <div
                key={matiere}
                style={{
                  marginBottom: 20,
                  padding: 15,
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
                }}
              >
                <h2 style={{ color: getColor(infos.moyenne) }}>
                  {matiere} — {infos.moyenne}/20
                </h2>

                <p style={{ fontStyle: "italic" }}>
                  {infos.appreciation}
                </p>
              </div>
            );
          })}
        </>
      )}

      {/* POPUP */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: 25,
              margin: "120px auto",
              width: 320,
              borderRadius: 15
            }}
          >
            <h2>{selected.nom}</h2>

            <p>
              Note :{" "}
              {isValid(selected.note)
                ? `${formatNote(selected.note)}/${selected.bareme}`
                : selected.note}
            </p>

            <p>Min : {selected.min}</p>
            <p>Max : {selected.max}</p>
            <p>Coef : {isValid(selected.note) ? selected.coef : 0}</p>

            <button onClick={() => setSelected(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}