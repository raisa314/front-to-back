import { connect } from 'react-redux'


const Count=props=>{
return(
    <div>
        <h2>{props.count} </h2>
    </div>
)
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count)




