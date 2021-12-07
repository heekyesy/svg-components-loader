const React = require('react');
const { getOptions } = require('loader-utils');
module.exports = function(source){
    return `
import React, {useRef, useEffect} from 'react';
export default function(props){
    const container = useRef(null);
    
    const { width, height } = props;
    useEffect(function(){
        container.current.outerHTML = ${JSON.stringify(source)};
        let svg = document.querySelector('svg');
        if(typeof width === 'number'){
            svg.setAttribute('width',width)
        }
        if(typeof height === 'number'){
            svg.setAttribute('height',height)
        }
    },[]);
    return React.createElement('svg', {ref:container});
}
    `
}