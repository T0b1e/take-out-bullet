<script>
    let inputCode = '';
    let outputCode = '';
  
    function convertToArduinoCode(inputText) {
      const lines = inputText.split('\n').map(line => line.replace(/^\d+\.\s*/, ''));
  
      let indentationLevel = 0;
      const indentedLines = lines.map(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.endsWith("}") && indentationLevel > 0) {
          indentationLevel--;
        }
        const indentation = '  '.repeat(indentationLevel);
        if (trimmedLine.endsWith("{")) {
          indentationLevel++;
        }
        return indentation + trimmedLine;
      });
  
      const indentedCode = indentedLines.join('\n');
      const regex = /\d+/g;
      const clearedCode = indentedCode.replace(regex, '');
  
      return clearedCode;
    }
  
    function handleInputChange(event) {
      inputCode = event.target.value;
      outputCode = convertToArduinoCode(inputCode);
    }
  
    function copyOutput() {
      const textarea = document.getElementById('rightTextarea');
      textarea.select();
      document.execCommand('copy');
    }
  </script>
  
  <style>
      * {
        margin: 0;
        padding: 0;
      }
  
      .container {
        height: calc(100vh - 3vh);
        display: flex;
        flex-direction: row;
      }
  
      .textarea-container {
        width: 50%;
        height: 98%;
        box-sizing: border-box;
        padding: 20px;
      }
  
      textarea {
        width: 100%;
        height: 98%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
      }
  
      .copy-button {
        position: absolute;
        top: 4%;
        right: 25px;
        cursor: pointer;
        background-color: transparent;
        border: none;
      }
  
      .copy-icon {
        width: 24px;
        height: 24px;
      }
  
      footer {
        position: absolute;
        bottom: -1%;
        height: 3vh;
        width: 100%;
        padding: 5px 0; 
        text-align: center;
        color: gray;
      }
  
      footer a {
        text-decoration: none;
        color: gray; 
      }
  
  </style>
    
  <div class="container">
    <div class="textarea-container">
      <textarea id="leftTextarea" bind:value={inputCode} on:input={handleInputChange} placeholder="Input Code Here ..."></textarea>
    </div>
    
    <div class="textarea-container" style="position: relative;">
      <textarea id="rightTextarea" bind:value={outputCode} placeholder="Output Code Here ..."></textarea>
      <button class="copy-button" on:click={copyOutput} title="Copy Output">
        <img class="copy-icon" src="https://img.icons8.com/material-outlined/24/000000/copy--v1.png"/>
      </button>
    </div>
  </div>
    
  <footer>
    <a href="https://github.com/T0b1e" >GitHub: T0b1e</a>
  </footer>
  