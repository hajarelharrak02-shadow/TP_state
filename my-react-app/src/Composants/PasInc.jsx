function PasInc({ setPasInc }) {
      return (
          <div>
                {[1, 2, 3, 4].map((n) => (
                        <button key={n} onClick={() => setPasInc(n)} 
                        style={{ margin: "5px", background: "blue", color: "white" }} >
                         {n}  </button>
                 ))}
         </div>
         );
}
  export default PasInc;
