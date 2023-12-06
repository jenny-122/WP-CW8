import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
            type: "all"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({ type: event });
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    const { search, type } = this.state;

        if (item.name !== undefined && item.type !== undefined) { //error checking to make sure values arent undefined
          const nameMatch = item.name.toLowerCase().includes(search);
          const typeMatch = type === "all" || item.type.toLowerCase() === type.toLowerCase();
      
          return nameMatch && typeMatch;
        }
      
        return false;
  }

  render(){
    return (
      <div className = "filter-list">
      <DropdownButton id="typeDropdown" title={"Product Type"} onSelect={this.onFilter} className='dropdown'>
          <Dropdown.Item eventKey="all">All</Dropdown.Item> 
          <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item> 
          <Dropdown.Item eventKey="Fruit">Fruits</Dropdown.Item> 
      </DropdownButton>

      <h1>Produce Search</h1>
      <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
      <List items = {this.props.items.filter(this.filterItem)} />
  </div>
    );
  }
}

export default FilteredList;
