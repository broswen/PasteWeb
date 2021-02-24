
import './Warning.css';
const Warning = (props) => {

    let warning;
    switch (props.status) {
        case 400:
            warning = "Malformed request";
            break;
        case 401:
            warning = "This paste is private";
            break;
        case 403:
            warning = "Password is incorrect";
            break;
        case 404:
            warning = "That paste is invalid or has expired"
            break;
        default:
            warning = "An error has occurred";
    }
    return (
        <div className="Warning">
            {
                warning
            }
        </div>
    );
}

export default Warning;