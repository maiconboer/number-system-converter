import React from 'react';

import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            inputDecimal: 0,
            outputBinary: 0,
            outputOctal: 0,
            outputHexadecimal: 0,
        }

        this.handleInputValue = (event) => {
            let { value } = event.target 
            
            this.setState({inputDecimal: value})

            setTimeout(() => {
                this.convertBinary()
                this.convertOctal()
                this.convertHexadecimal()
            }, 50);
        }
    }

    convertBinary = ()  => {
        let input = this.state.inputDecimal
        let divider = 2
        let arrayRest = []
        let resultDivision = 0

            while(input > 0) {
                resultDivision = parseInt(input / divider)
                arrayRest.push(parseInt(input % divider))     
                input = resultDivision
            }      
        this.setState({outputBinary: arrayRest.reverse()})   
    }

    convertOctal = ()  => {
        let input = this.state.inputDecimal
        let divider = 8
        let arrayRest = []
        let resultDivision = 0

            while(input > 0) {
                resultDivision = parseInt(input / divider)
                arrayRest.push(parseInt(input % divider))     
                input = resultDivision
            }    
        this.setState({outputOctal: arrayRest.reverse()})
        
    }

    convertHexadecimal = ()  => {
        let input = this.state.inputDecimal
        let divider = 16
        let arrayRest = []
        let resultDivision = 0

            while(input > 0) {
                resultDivision = parseInt(input / divider)
                arrayRest.push((input % divider))       
                input = resultDivision
            }      

            arrayRest.map((item, index) => {
                switch (item) {
                    case 10 :
                        arrayRest[index] = 'a'
                    break;

                    case 11 :
                        arrayRest[index] = 'b'
                    break;

                    case 12 :
                        arrayRest[index] = 'c'
                    break;

                    case 13 :
                        arrayRest[index] = 'd'
                    break;

                    case 14 :
                        arrayRest[index] = 'e'
                    break;

                    case 15 :
                        arrayRest[index] = 'f'
                    break;
                }
            })
        this.setState({outputHexadecimal: arrayRest.reverse()})
    }

    render() {
        return (
            <>
                <section className='content'>
                    <h1>Conversor de sistemas numéricos</h1>
                    <p className='text-info'>Entrada: decimal</p>
                    <p className='text-info'>Saidas: Binario, Octal e Hexadecimal</p>
                    <div className='box-input-output'>
                        <div className='inputData'>   
          
                            <label htmlFor="inputDecimal">Decimal:</label>
                            <input
                                type='number'
                                name='inputDecimal'
                                id='inputDecimal'
                                onChange={this.handleInputValue}
                                autoFocus
                            />
                        </div>
                        <div className="outputData">
                            
                            <p>Bin: <span>{this.state.outputBinary}</span></p>
                            <p>Oct: <span>{this.state.outputOctal}</span></p>
                            <p>Hex: <span>{this.state.outputHexadecimal}</span></p>

                        </div>
                    </div>

                </section>
            </>
        );
    }
}

export default App;
