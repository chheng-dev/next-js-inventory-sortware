import React from 'react'
import FixedHeader from "../../../../components/dashboard/FixedHeader";
import ListItem from "../../../../components/dashboard/item-group/ListItem";

function Inventory () {
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <ListItem />
    </div>
  )
}

export default Inventory 
