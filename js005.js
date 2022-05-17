'use strict';

const LOTTO_COUNT     =  6;
const LOTTO_MIN_VALUE =  1;
const LOTTO_MAX_VALUE = 49;

window.onload = fillTable;

function cellClicked( idName )
{
  let element = document.getElementsByName( idName )[ 1 ];
  element.innerText = Math.floor( ( LOTTO_MAX_VALUE - LOTTO_MIN_VALUE + 1 ) * Math.random() ) + 1;
}

function fillTable()
{
  let tableContents = "<caption>Meine Lottozahlen</caption>";

  for( let r = 0; r < LOTTO_COUNT; r++ )
  {
    tableContents += "<tr><td name=\"lotto" + r + "\" onclick='cellClicked( \"lotto" + r + "\" )'>Zahl " + ( r + 1 ) +  "</td>";
    tableContents += "<td name=\"lotto" + r + "\" onclick='cellClicked( \"lotto" + r + "\" )'>&nbsp;</td></tr>\n";
  }
  let element = document.getElementsByTagName( "table" )[ 0 ];
  element.innerHTML = tableContents;
}
