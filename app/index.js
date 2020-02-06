import React from 'react'
import ReactDOM from 'react-dom'
import { useCombobox } from 'downshift'
import './index.css'

function App() {
  const searchList = [
    { name: 'Alabama' },
    { name: 'Alaska' },
    { name: 'Arizona' },
    { name: 'Arkansas' },
    { name: 'California' },
    { name: 'Colorado' },
    { name: 'Connecticut' },
    { name: 'Delaware' },
    { name: 'Florida' },
    { name: 'Georgia' },
    { name: 'Hawaii' },
    { name: 'Idaho' },
    { name: 'Illinois' },
    { name: 'Indiana' },
    { name: 'Iowa' },
    { name: 'Kansas' },
    { name: 'Kentucky' },
    { name: 'Louisiana' },
    { name: 'Maine' },
    { name: 'Maryland' },
    { name: 'Massachusetts' },
    { name: 'Michigan' },
    { name: 'Minnesota' },
    { name: 'Mississippi' },
    { name: 'Missouri' },
    { name: 'Montana' },
    { name: 'Nebraska' },
    { name: 'Nevada' },
    { name: 'New Hampshire' },
    { name: 'New Jersey' },
    { name: 'New Mexico' },
    { name: 'New York' },
    { name: 'North Carolina' },
    { name: 'North Dakota' },
    { name: 'Ohio' },
    { name: 'Oklahoma' },
    { name: 'Oregon' },
    { name: 'Pennsylvania' },
    { name: 'Rhode Island' },
    { name: 'South Carolina' },
    { name: 'South Dakota' },
    { name: 'Tennessee' },
    { name: 'Texas' },
    { name: 'Utah' },
    { name: 'Vermont' },
    { name: 'Virginia' },
    { name: 'Washington' },
    { name: 'West Virginia' },
    { name: 'Wisconsin' },
    { name: 'Wyoming' },
  ]
  const [items, setItems] = React.useState(searchList)

  const {
    getInputProps,
    getMenuProps,
    isOpen,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    itemToString: ({ name }) => name,
    onInputValueChange: ({ inputValue }) => {
      setItems(
        searchList.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })

  return (
    <>
      <input {...getInputProps()} />
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, i) => (
            <li
              style={highlightedIndex === i ? {backgroundColor: '#bde4ff'} : {}}
              key={`${item.name}`}
              {...getItemProps({item, i})}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
