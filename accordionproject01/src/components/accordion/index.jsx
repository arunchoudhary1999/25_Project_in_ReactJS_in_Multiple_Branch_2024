// single selection
// import { useState } from "react";
// import data from "./data";
// import "./style.css";

// const Accordion = () => {
//   const [selected, setSelected] = useState(null);

//   function handleSingleClick(getCurrentId) {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   }

//   return (
//     <>
//       <div className="wrapper">
//         <div className="accordion">
//           {data && data.length > 0 ? (
//             data.map((dataItem, index) => (
//               <div key={index}>
//                 <div className="item">
//                   <div
//                     onClick={() => handleSingleClick(dataItem.id)}
//                     className="title"
//                   >
//                     <h3>{dataItem.question}</h3>
//                     <span>+</span>
//                   </div>
//                   {selected === dataItem.id ? (
//                     <div className="content">{dataItem.answer}</div>
//                   ) : null}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div>No data found</div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Accordion;

// multiple selection
import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];

    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  console.log(selected, multiple);

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem, index) => (
              <div key={index}>
                <div className="item">
                  <div
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleClick(dataItem.id)
                    }
                    className="title"
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
