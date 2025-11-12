// Esta función crea un nuevo deck
import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('TiposDeCartas es requerido como un arreglo de strings');
        
    if (!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es requerido como un arreglo de strings');

    let deck         = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );

    return deck;
}
