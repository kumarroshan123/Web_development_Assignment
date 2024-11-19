let Greetings=({name,greeting})=>{
    return (
        <div className="card">
        <h1>{ greeting } {name} !</h1>
        </div>
    );
};

export default Greetings;