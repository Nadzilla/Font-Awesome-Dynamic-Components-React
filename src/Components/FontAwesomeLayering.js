import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class FontAwesomeLayering extends Component {

    render() {
        const length = this.props.icons.length;
        // REQUIRED: 
        let icons = this.props.icons;

        // OPTIONAL: 
        let colors = this.props.colors; // Any color 
        let sizes = this.props.sizes; // Examples: '1x' '2x' '3x' '4x' ...etc.
        let transforms = this.props.transforms; // Example: 'shrink-6 right-9 up-2 down-4.5 grow-2'
        let rotations = this.props.rotations; // 90 or 180 or 270 ONLY
        let spins = this.props.spin; // true or false 
        let pulses = this.props.pulse; // true or false 
        let listItems = this.props.listItem; // true or false 
        let inverses = this.props.inverse; // true or false 
        let fixedWidths = this.props.fixedWidth; // true or false 
        let flips = this.props.flip; // 'horizontal' or 'vertical' or 'both' ONLY 
        let borders = this.props.border; // true or false 
        let classes = this.props.classes;



        if (typeof (classes) === 'undefined') {
            classes = [];
            for (let i = 0; i < length; i++) {
                classes.push('')
            }
        } else if (classes.length !== length) {
            for (let j = classes.length; j < length; j++) {
                classes.push('');
            }
        }


        if (typeof (colors) === 'undefined') {
            colors = [];
            for (let i = 0; i < length; i++) {
                colors.push('black')
            }
        } else if (colors.length !== length) {
            for (let j = colors.length; j < length; j++) {
                colors.push('black');
            }
        }

        if (typeof (sizes) === 'undefined') {
            sizes = [];
            for (let i = 0; i < length; i++) {
                sizes.push('1x');
            }
        } else if (sizes.length !== length) {
            for (let j = sizes.length; j < length; j++) {
                sizes.push('1x');
            }
        }

        if (typeof (transforms) === 'undefined') {
            transforms = [];
            for (let i = 0; i < length; i++) {
                transforms.push('');
            }
        } else if (transforms.length !== length) {
            for (let j = transforms.length; j < length; j++) {
                transforms.push('')
            }
        }

        if (typeof (rotations) === 'undefined') {
            rotations = [];
            for (let i = 0; i < length; i++) {
                rotations.push('');
            }
        } else if (rotations.length !== length) {
            for (let j = rotations.length; j < length; j++) {
                rotations.push('');
            }
        }

        if (typeof (spins) === 'undefined') {
            spins = [];
            for (let i = 0; i < length; i++) {
                spins.push(false);
            }
        } else if (spins.length !== length) {
            for (let j = spins.length; j < length; j++) {
                spins.push(false);
            }
        }

        if (typeof (pulses) === 'undefined') {
            pulses = [];
            for (let i = 0; i < length; i++) {
                pulses.push(false);
            }
        } else if (pulses.length !== length) {
            for (let j = pulses.length; j < length; j++) {
                pulses.push(false);
            }
        }

        if (typeof (listItems) === 'undefined') {
            listItems = [];
            for (let i = 0; i < length; i++) {
                listItems.push(false);
            }
        } else if (listItems.length !== length) {
            for (let j = listItems.length; j < length; j++) {
                listItems.push(false);
            }
        }

        if (typeof (inverses) === 'undefined') {
            inverses = [];
            for (let i = 0; i < length; i++) {
                inverses.push(false);
            }
        } else if (inverses.length !== length) {
            for (let j = inverses.length; j < length; j++) {
                inverses.push(false);
            }
        }

        if (typeof (fixedWidths) === 'undefined') {
            fixedWidths = [];
            for (let i = 0; i < length; i++) {
                fixedWidths.push(false);
            }
        } else if (fixedWidths.length !== length) {
            for (let j = fixedWidths.length; j < length; j++) {
                fixedWidths.push(false);
            }
        }

        if (typeof (flips) === 'undefined') {
            flips = [];
            for (let i = 0; i < length; i++) {
                flips.push('');
            }
        } else if (flips.length !== length) {
            for (let j = flips.length; j < length; j++) {
                flips.push('');
            }
        }

        if (typeof (borders) === 'undefined') {
            borders = [];
            for (let i = 0; i < length; i++) {
                borders.push(false);
            }
        } else if (borders.length !== length) {
            for (let j = borders.length; j < length; j++) {
                borders.push(false);
            }
        }

        return (
            <div className="fa-layers fa-fw">
                {icons.map((icon, i) => {
                    if (flips[i] === '' && rotations[i] === '') {
                        return (
                            <FontAwesomeIcon
                                key={i}
                                icon={icon}
                                color={colors[i]}
                                size={sizes[i]}
                                transform={transforms[i]}
                                spin={spins[i]}
                                pulse={pulses[i]}
                                listItem={listItems[i]}
                                inverse={inverses[i]}
                                fixedWidth={fixedWidths[i]}
                                border={borders[i]}
                                className={classes[i]}
                            />
                        )
                    } else if (flips[i] === '') {
                        return (
                            <FontAwesomeIcon
                                key={i}
                                icon={icon}
                                color={colors[i]}
                                size={sizes[i]}
                                transform={transforms[i]}
                                rotation={rotations[i]}
                                spin={spins[i]}
                                pulse={pulses[i]}
                                listItem={listItems[i]}
                                inverse={inverses[i]}
                                fixedWidth={fixedWidths[i]}
                                border={borders[i]}
                                className={classes[i]}
                            />
                        )

                    } else if (rotations[i] === '') {
                        return (
                            <FontAwesomeIcon
                                key={i}
                                icon={icon}
                                color={colors[i]}
                                size={sizes[i]}
                                transform={transforms[i]}
                                spin={spins[i]}
                                pulse={pulses[i]}
                                listItem={listItems[i]}
                                inverse={inverses[i]}
                                fixedWidth={fixedWidths[i]}
                                flip={flips[i]}
                                border={borders[i]}
                                className={classes[i]}
                            />
                        )

                    } else {
                        return (
                            <FontAwesomeIcon
                                key={i}
                                icon={icon}
                                color={colors[i]}
                                size={sizes[i]}
                                transform={transforms[i]}
                                rotation={rotations[i]}
                                spin={spins[i]}
                                pulse={pulses[i]}
                                listItem={listItems[i]}
                                inverse={inverses[i]}
                                fixedWidth={fixedWidths[i]}
                                flip={flips[i]}
                                border={borders[i]}
                                className={classes[i]}
                            />
                        )
                    }

                })}
            </div>
        )
    }



}

//                     <FontAwesomeIcon icon="square" color="green" size="5x" />

/*
<span className="fa-layers fa-fw">
  <FontAwesomeIcon icon="square" color="green" />
  <FontAwesomeIcon icon="check" inverse transform="shrink-6" />
</span>
*/
