type GreetingsProps = {
    name: string
}

export default function Greetings(props: GreetingsProps) {

    console.log("test")
    return (
        <>
            <div>
                <p>
                    Hallo {props.name}
                </p>
            </div>
            <div>

            </div>
        </>
    )
}
