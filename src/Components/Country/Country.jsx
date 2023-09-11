import './Country.css'
const Country = ({country}) => {
    const {name,flags,population,area,cca3} = country; 
    return (
        <div className="country">
           <h3>{name.common} </h3>
           <img src={flags.png} alt="" />
           <p>Populasion:{population} </p>
           <p>Area:{area}</p>
           <p><small>Code:{cca3}</small></p>
           <button>Plaese Click</button>
        </div>
    );
};

export default Country;