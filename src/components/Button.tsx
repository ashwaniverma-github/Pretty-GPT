
interface propTypes{
    onclick:(event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({onclick}:propTypes){
    return <div>
        <button className=" btn btn-md rounded-badge btn-primary " onClick={onclick}> Send</button>
    </div>
}