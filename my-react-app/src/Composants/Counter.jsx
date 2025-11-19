import { useState } from "react";
import Valeur from "./Valeur";
import PasInc from "./PasInc";
import PasDesc from "./PasDesc";   // ← كان PasDec

function Counter() {
  const [counter, setCounter] = useState(0);
    const [pasInc, setPasInc] = useState(1);
      const [pasDesc, setPasDesc] = useState(1);   // ← كان pasDec

        const incrementer = () => {
            setCounter(counter + pasInc);
              };

                const decrementer = () => {
                    setCounter(counter - pasDesc);   // ← كان pasDec
                      };

                        const initialiser = () => {
                            setCounter(0);
                              };

                                return (
                                    <div style={{ width: "350px", margin: "auto", padding: "20px", border: "1px solid #000" }}>
                                          <Valeur valeur={counter} />

                                                <div style={{ marginTop: "10px" }}>
                                                        <button onClick={incrementer}>Incrémenter</button>
                                                                <button onClick={decrementer} style={{ margin: "0 10px" }}>Décrémenter</button>
                                                                        <button onClick={initialiser}>Initialiser</button>
                                                                              </div>

                                                                                    <h3>Pas d'incrémentation</h3>
                                                                                          <PasInc setPasInc={setPasInc} />

                                                                                                <h3>Pas de décrémentation</h3>
                                                                                                      <PasDesc setPasDesc={setPasDesc} />  {/* ← كان PasDec */}
                                                                                                          </div>
                                                                                                            );
                                                                                                            }

                                                                                                            export default Counter;