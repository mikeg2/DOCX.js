/*
  This demo converts a DOCX file (passed in as an argument) to a String HTML document
*/


/*
  This function does the entire conversion form DOCX to String.
  
  DOCX.js requires a JSZip object as the input to convertContent.
  It returns a NodeList, which is then converted to a string.
*/
function($file) {
        var reader = new FileReader();
        reader.onload = function(e) {
           var zip = new JSZip(e.target.result);
           return convertNodeListToString(convertContent(zip));
       };
       reader.readAsBinaryString($file);
    };
}

/*
  Converts a NodeList to a HTML String.
*/
function convertNodeListToString(nodelist) {
        var final_html = Array.prototype.reduce.call(nodelist, function(html, node) {
            return html + ( node.outerHTML || node.nodeValue );
        }, "");
        return final_html;
}
