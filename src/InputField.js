import React from "react";

let y = 1;

const InputField = (word) => {

    let inputArray = [];
    let foundArray = [];
    let array = Array.from(word.word);

    const [input1, setInput1] = React.useState(false);
    const [input2, setInput2] = React.useState(false);
    const [input3, setInput3] = React.useState(false);
    const [input4, setInput4] = React.useState(false);
    const [input5, setInput5] = React.useState(false);
    const [input6, setInput6] = React.useState(false);
    const [input7, setInput7] = React.useState(false);
    const [input8, setInput8] = React.useState(false);
    const [input9, setInput9] = React.useState(false);
    const [input10, setInput10] = React.useState(false);
    const [input11, setInput11] = React.useState(false);
    const [input12, setInput12] = React.useState(false);
    const [input13, setInput13] = React.useState(false);
    const [input14, setInput14] = React.useState(false);
    const [input15, setInput15] = React.useState(false);
    const [input16, setInput16] = React.useState(false);
    const [input17, setInput17] = React.useState(false);
    const [input18, setInput18] = React.useState(false);
    const [input19, setInput19] = React.useState(false);
    const [input20, setInput20] = React.useState(false);
    const [input21, setInput21] = React.useState(false);
    const [input22, setInput22] = React.useState(false);
    const [input23, setInput23] = React.useState(false);
    const [input24, setInput24] = React.useState(false);
    const [input25, setInput25] = React.useState(false);

    const [inputYellow1, setInputYellow1] = React.useState(false);
    const [inputYellow2, setInputYellow2] = React.useState(false);
    const [inputYellow3, setInputYellow3] = React.useState(false);
    const [inputYellow4, setInputYellow4] = React.useState(false);
    const [inputYellow5, setInputYellow5] = React.useState(false);
    const [inputYellow6, setInputYellow6] = React.useState(false);
    const [inputYellow7, setInputYellow7] = React.useState(false);
    const [inputYellow8, setInputYellow8] = React.useState(false);
    const [inputYellow9, setInputYellow9] = React.useState(false);
    const [inputYellow10, setInputYellow10] = React.useState(false);
    const [inputYellow11, setInputYellow11] = React.useState(false);
    const [inputYellow12, setInputYellow12] = React.useState(false);
    const [inputYellow13, setInputYellow13] = React.useState(false);
    const [inputYellow14, setInputYellow14] = React.useState(false);
    const [inputYellow15, setInputYellow15] = React.useState(false);
    const [inputYellow16, setInputYellow16] = React.useState(false);
    const [inputYellow17, setInputYellow17] = React.useState(false);
    const [inputYellow18, setInputYellow18] = React.useState(false);
    const [inputYellow19, setInputYellow19] = React.useState(false);
    const [inputYellow20, setInputYellow20] = React.useState(false);
    const [inputYellow21, setInputYellow21] = React.useState(false);
    const [inputYellow22, setInputYellow22] = React.useState(false);
    const [inputYellow23, setInputYellow23] = React.useState(false);
    const [inputYellow24, setInputYellow24] = React.useState(false);
    const [inputYellow25, setInputYellow25] = React.useState(false);

    const changeInput = (x, y) => {
      if(x === 1 && y === 1) {
        setInput1(true);
      } else if (x === 1 && y === 2) {
        setInput2(true);
      } else if (x === 1 && y === 3) {
        setInput3(true);
      } else if (x === 1 && y === 4) {
        setInput4(true);
      } else if (x === 1 && y === 5) {
        setInput5(true);
      } else if (x === 2 && y === 1) {
        setInput6(true);
      } else if (x === 2 && y === 2) {
        setInput7(true);
      } else if (x === 2 && y === 3) {
        setInput8(true);
      } else if (x === 2 && y === 4) {
        setInput9(true);
      } else if (x === 2 && y === 5) {
        setInput10(true);
      } else if (x === 3 && y === 1) {
        setInput11(true);
      } else if (x === 3 && y === 2) {
        setInput12(true);
      } else if (x === 3 && y === 3) {
        setInput13(true);
      } else if (x === 3 && y === 4) {
        setInput14(true);
      } else if (x === 3 && y === 5) {
        setInput15(true);
      } else if (x === 4 && y === 1) {
        setInput16(true);
      } else if (x === 4 && y === 2) {
        setInput17(true);
      } else if (x === 4 && y === 3) {
        setInput18(true);
      } else if (x === 4 && y === 4) {
        setInput19(true);
      } else if (x === 4 && y === 5) {
        setInput20(true);
      } else if (x === 5 && y === 1) {
        setInput21(true);
      } else if (x === 5 && y === 2) {
        setInput22(true);
      } else if (x === 5 && y === 3) {
        setInput23(true);
      } else if (x === 5 && y === 4) {
        setInput24(true);
      } else if (x === 5 && y === 5) {
        setInput25(true);
      }
    };

    const changeInputYellow = (x, y) => {
      if(x === 1 && y === 1) {
        setInputYellow1(true);
      } else if (x === 1 && y === 2) {
        setInputYellow2(true);
      } else if (x === 1 && y === 3) {
        setInputYellow3(true);
      } else if (x === 1 && y === 4) {
        setInputYellow4(true);
      } else if (x === 1 && y === 5) {
        setInputYellow5(true);
      } else if (x === 2 && y === 1) {
        setInputYellow6(true);
      } else if (x === 2 && y === 2) {
        setInputYellow7(true);
      } else if (x === 2 && y === 3) {
        setInputYellow8(true);
      } else if (x === 2 && y === 4) {
        setInputYellow9(true);
      } else if (x === 2 && y === 5) {
        setInputYellow10(true);
      } else if (x === 3 && y === 1) {
        setInputYellow11(true);
      } else if (x === 3 && y === 2) {
        setInputYellow12(true);
      } else if (x === 3 && y === 3) {
        setInputYellow13(true);
      } else if (x === 3 && y === 4) {
        setInputYellow14(true);
      } else if (x === 3 && y === 5) {
        setInputYellow15(true);
      } else if (x === 4 && y === 1) {
        setInputYellow16(true);
      } else if (x === 4 && y === 2) {
        setInputYellow17(true);
      } else if (x === 4 && y === 3) {
        setInputYellow18(true);
      } else if (x === 4 && y === 4) {
        setInputYellow19(true);
      } else if (x === 4 && y === 5) {
        setInputYellow20(true);
      } else if (x === 5 && y === 1) {
        setInputYellow21(true);
      } else if (x === 5 && y === 2) {
        setInputYellow22(true);
      } else if (x === 5 && y === 3) {
        setInputYellow23(true);
      } else if (x === 5 && y === 4) {
        setInputYellow24(true);
      } else if (x === 5 && y === 5) {
        setInputYellow25(true);
      }
    };

    const handleChange = e => {
      const { maxLength, value, name } = e.target;
      // eslint-disable-next-line
      const [fieldName, fieldIndex] = name.split("-");
      if (value.length >= maxLength) {
        inputArray.push(value);
        if (parseInt(fieldIndex, 10) <= 25) {
          const nextSibling = document.querySelector(
            `input[name=input-${parseInt(fieldIndex, 10) + 1}]`
          );
          if (nextSibling !== null) {
            nextSibling.focus();
          }
          console.log('nightmare');
          if (parseInt(fieldIndex, 10) % 5 === 0) {
            console.log('array: ',array);
            console.log('inputarray: ' + inputArray);
            for (let i = 0; i <= 5; i++) {
              if(array.includes(inputArray[i])) {
                console.log('found: ', i + 1);
                changeInputYellow(y, i + 1);
                foundArray.push(inputArray[i]);
              }
            }
            let count = 0;
            for (let i = 0; i <= 5; i++) {
              if (inputArray[i] === array[i]) {
                console.log('same: ', i + 1);
                changeInput(y, i + 1);
                count += 1;
              }
              console.log('count: ', count);
              if (count > 5) {
                console.log('win');
                let wins = parseInt(localStorage.getItem('wins')) + 1;
                
                localStorage.setItem('wins', wins);
              }
            }
            inputArray = [];
            console.log('clear array');
            console.log(inputArray);
            console.log('y: ', y);
            y += 1;
            console.log('y++: ', y);
          }
        }
      }
    }
  
    return (
      <>
      <div className='input-row'>
        <input
          className={input1 ? 'input-green' : inputYellow1 ? 'input-yellow' : 'input'}
          type="text"
          name="input-1"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input2 ? 'input-green' : inputYellow2 ? 'input-yellow' : 'input'}
          type="text"
          name="input-2"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input3 ? 'input-green' : inputYellow3 ? 'input-yellow' : 'input'}
          type="text"
          name="input-3"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input4 ? 'input-green' : inputYellow4 ? 'input-yellow' : 'input'}
          type="text"
          name="input-4"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input5 ? 'input-green' : inputYellow5 ? 'input-yellow' : 'input'}
          type="text"
          name="input-5"
          maxLength={1}
          onChange={handleChange} />
      </div>
      <div className='input-row'>
        <input
          className={input6 ? 'input-green' : inputYellow6 ? 'input-yellow' : 'input'}
          type="text"
          name="input-6"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input7 ? 'input-green' : inputYellow7 ? 'input-yellow' : 'input'}
          type="text"
          name="input-7"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input8 ? 'input-green' : inputYellow8 ? 'input-yellow' : 'input'}
          type="text"
          name="input-8"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input9 ? 'input-green' : inputYellow9 ? 'input-yellow' : 'input'}
          type="text"
          name="input-9"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input10 ? 'input-green' : inputYellow10 ? 'input-yellow' : 'input'}
          type="text"
          name="input-10"
          maxLength={1}
          onChange={handleChange} />
      </div>
      <div className='input-row'>
        <input
          className={input11 ? 'input-green' : inputYellow11 ? 'input-yellow' : 'input'}
          type="text"
          name="input-11"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input12 ? 'input-green' : inputYellow12 ? 'input-yellow' : 'input'}
          type="text"
          name="input-12"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input13 ? 'input-green' : inputYellow13 ? 'input-yellow' : 'input'}
          type="text"
          name="input-13"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input14 ? 'input-green' : inputYellow14 ? 'input-yellow' : 'input'}
          type="text"
          name="input-14"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input15 ? 'input-green' : inputYellow15 ? 'input-yellow' : 'input'}
          type="text"
          name="input-15"
          maxLength={1}
          onChange={handleChange} />
      </div>
      <div className='input-row'>
        <input
          className={input16 ? 'input-green' : inputYellow16 ? 'input-yellow' : 'input'}
          type="text"
          name="input-16"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input17 ? 'input-green' : inputYellow17 ? 'input-yellow' : 'input'}
          type="text"
          name="input-17"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input18 ? 'input-green' : inputYellow18 ? 'input-yellow' : 'input'}
          type="text"
          name="input-18"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input19 ? 'input-green' : inputYellow19 ? 'input-yellow' : 'input'}
          type="text"
          name="input-19"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input20 ? 'input-green' : inputYellow20 ? 'input-yellow' : 'input'}
          type="text"
          name="input-20"
          maxLength={1}
          onChange={handleChange} />
      </div>
      <div className='input-row'>
        <input
          className={input21 ? 'input-green' : inputYellow21 ? 'input-yellow' : 'input'}
          type="text"
          name="input-21"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input22 ? 'input-green' : inputYellow22 ? 'input-yellow' : 'input'}
          type="text"
          name="input-22"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input23 ? 'input-green' : inputYellow23 ? 'input-yellow' : 'input'}
          type="text"
          name="input-23"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input24 ? 'input-green' : inputYellow24 ? 'input-yellow' : 'input'}
          type="text"
          name="input-24"
          maxLength={1}
          onChange={handleChange} />
        <input
          className={input25 ? 'input-green' : inputYellow25 ? 'input-yellow' : 'input'}
          type="text"
          name="input-25"
          maxLength={1}
          onChange={handleChange} />
      </div>
      </>
    );
  };

    export default InputField;