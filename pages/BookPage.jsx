const { Link } = ReactRouterDOM;

export default class Book extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    
    console.log('id', id)
  }
  
  componentDidUpdate(prevProps) {
    const { id: prevId } = prevProps.match.params;
    const { id } = this.props.match.params;
    if(prevId !== id) {
      console.log('reloading book with id:', id);
    }
  }
  
  render() {
    return (
      <div>
        <Link to="/book/raodnosmd123">Special Offer</Link>
        <h1>Books!</h1>
      </div>
    )
  }
}
