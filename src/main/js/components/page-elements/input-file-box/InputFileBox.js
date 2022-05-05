import Toolkit from "../../../infra/Toolkit";
import '../../../../static/css/InputFileBox.css';

const InputFileBox = ({
    label,
    tooltipMsg,
    exampleFileContent,
    setInputFile
}) => {
    const msg = Toolkit.Messages.getMessages;
    return (
        <div className="InputFileBox">
            <div className="center">
                <p className="grey-text text-darken-3">{label}</p>
                <div className="tooltip">
                    <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                    <span className="tooltiptext">{tooltipMsg}
                        <br />
                        {exampleFileContent && <a download="example_sequences.txt" href={"data:text/plain;base64," + btoa(exampleFileContent)}>{msg('common.exemplo')}</a>}
                    </span>
                </div>
                <button className="btn purple lighten-2">
                    <input name="inputSeqsFile" className="file-path validate"
                        type="file" placeholder="Upload one or more files"
                        onChange={event => setInputFile?.(event.target.files[0])} />
                </button>
            </div>
        </div>
    );
}

export default InputFileBox;