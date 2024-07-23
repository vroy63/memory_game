import React, { Component } from 'react';
import Prompt from './Prompt'; // Ensure you have the Prompt component correctly imported

const items = [];

for (let i = 65; i < 75; i++) {
    items.push({
        id: i,
        content: String.fromCharCode(i),
        displayed: false,
    });
}

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items,
        };

        this.handleAnswer = this.handleAnswer.bind(this);
        this.randomItemIndex = this.randomItemIndex.bind(this);
    }

    handleAnswer( event, item, index, answer) {
        console.log(item, answer);
        if (item.displayed === answer) {
          this.props.handleScore(true);
          const updatedItems = this.state.items.map((i, idx) => {
            if (idx === index) {
              return { ...i, displayed: true };
            } else {
              return i;
            }
          });
      

          this.setState({ items: updatedItems });
        } else {
           
            this.props.handleScore(false);
            
        }
      }

    randomItemIndex() {
        let rand = Math.floor(Math.random() * items.length);
        return rand;
    }

    render() {
        const { items } = this.state;
        const index = this.randomItemIndex();
        const item = items[index];

        return (
            <main className="d-flex justify-content-around align-items-center">
                <p id={index}>{item.content} Monkey</p>
                <Prompt
                    item={item}
                    index={index}
                    handleAnswer={this.handleAnswer}
                />
            </main>
        );
    }
}

export default Game;