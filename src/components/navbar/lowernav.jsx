// "use client"
import React from 'react';
import Menu from './Menu';

export const categories = [
  {
    id: 1,
    name: "Desi Grocery",
    parent_id: null,
    subMenu: [],
  },
  {
    id: 2,
    name: "Beauty & Wellness",
    parent_id: null,
    subMenu: [
      {
        id: 3,
        name: "Personal Care",
        parent_id: 2,
        subMenu: [
         { id: 4, name: "Oral Care", parent_id: 3 }],
      },
      { id: 5, name: "Haircare", parent_id: 2, subMenu: [] },
      {
        id: 6,
        name: "Health & Wellness",
        parent_id: 2,
        subMenu: [
          { id: 7, name: "Proteins and SuperFoods", parent_id: 6 },
          { id: 8, name: "Supplements & Vitamins", parent_id: 6 },
        ],
      },
    ],
  },



  
  {
    id: 9,
    name: "Food & Drinks",
    parent_id: null,
    subMenu: [
      {
        id: 10,
        name: "Snacks",
        parent_id: 9,
        subMenu: [
          { id: 11, name: "Haldiram Snacks", parent_id: 10 },
          { id: 12, name: "Buscuits", parent_id: 10 },
          { id: 13, name: "Chips", parent_id: 10 },
          { id: 14, name: "Ready to Eat", parent_id: 10 },
        ],
      },
      { id: 15, name: "Grains & Pasta", parent_id: 9, subMenu: [
         {
             id: 16,
    name: "Dals & Lentils",
    parent_id: 15,
         },
         {
             id: 17,
    name: "Chickpeas & Beans",
    parent_id: 15,
         }
      ] },
      { id: 18, name: "Dried Fruits & Nuts", parent_id: 9, subMenu: [
         
             {
                 id: 19,
        name: "Nuts",
        parent_id: 18,
             }
         
      ] },
      { id: 20, name: "Dairy", parent_id: 9, subMenu: [
         {
             id: 21,
    name: "Butter/Ghee",
    parent_id: 20,
         },
         {
             id: 22,
    name: "Dairy Products",
    parent_id: 20,
         }
      ] },
      { id: 23, name: "Atta & Flours", parent_id: 9, subMenu: [
         {
             id: 24,
    name: "Atta/Flours",
    parent_id: 23,
         },
         {
             id: 25,
    name: "Other Flours",
    parent_id: 23,
         }
      ] },
      { id: 26, name: "Masala & Spices", parent_id: 9, subMenu: [
         {
             id: 27,
    name: "Sauces",
    parent_id: 26,
         },
         {
             id: 28,
    name: "Spices Mixes",
    parent_id: 26,
         },
         {
             id: 29,
    name: "Ground Spices",
    parent_id: 26,
         },
         {
             id: 30,
    name: "Whole Spices",
    parent_id: 26,
         },
         {
             id: 31,
    name: "Pickles",
    parent_id: 26,
         }
      ] },
      { id: 32, name: "Deserts & Sweets", parent_id: 9, subMenu: [
         {
             id: 33,
    name: "Deserts Mixes",
    parent_id: 32,
         },
         {
             id: 34,
    name: "Sweets",
    parent_id: 32,
         }
      ] },
      { id: 35, name: "Beverages", parent_id: 9, subMenu: [
         {
             id: 36,
    name: "Alcoholic Beverages",
    parent_id: 35,
    subMenu:[
     {
         id: 37,
name: "Beers",
parent_id: 36,
     }
    ]
         },
         {
             id: 38,
    name: "Juices",
    parent_id: 35,
         },
         {
             id: 39,
    name: "Soft Drinks",
    parent_id: 35,
         }
      ] },
      { id: 40, name: "Canned/Preserved", parent_id: 9, subMenu: [
         {
             id: 41,
    name: "Beans/Legumes",
    parent_id: 40,
         }
      ] },
      { id: 42, name: "Rice", parent_id: 9, subMenu: [
         {
             id: 43,
    name: "Basmati Rice",
    parent_id: 42,
         },
         {
             id: 44,
    name: "South Indian Rice",
    parent_id: 42,
         }
      ] },
      { id: 45, name: "Frozen", parent_id: 9, subMenu: [
         {
             id: 46,
    name: "Frozen Bread",
    parent_id: 45,
         }
      ] },
    ],
  },

  {
     id: 47,
     name: "Fashion Accessories",
     parent_id: null,
     subMenu: [],
   },
   {
     id: 48,
     name: "Home & Kitchen",
     parent_id: null,
     subMenu: [],
   },
   {
     id: 49,
     name: "New Arrivals",
     parent_id: null,
     subMenu: [],
   },
   {
     id: 50,
     name: "Dicover Brands",
     parent_id: null,
     subMenu: [],
   },
   {
     id: 51,
     name: "Careers",
     parent_id: null,
     subMenu: [],
   },
   {
     id: 52,
     name: "Private Label",
     parent_id: null,
     subMenu: [],
   },
];

 const LowerNav = () => {
    // const [submenu,setsubmenu]=useState(false)
    // const togglesubmenu=()=>{
    //     setsubmenu(!submenu)
    // }


//    const [hoveredItemId, setHoveredItemId] = useState(null); // State to track hovered item

//    const handleMouseEnter = (itemId) => {
//      setHoveredItemId(itemId); // Set hovered item when mouse enters
//    };
 
//    const handleMouseLeave = () => {
//     //  setHoveredItemId(null); // Reset when mouse leaves
//    };
 
   
//   const renderMenu = (menuItems, depth = 0) => {
//     return menuItems.map((item) => (
//       <li
//         key={item.id} // Ensure unique key prop for each li
//         className={`relative block transition-all duration-500 group ${depth > 0 ? 'ml-4' : ''}`} // Indentation for nested items
//         onMouseEnter={() => handleMouseEnter(item.id)} // Set the hovered item ID when mouse enters
//         // onMouseLeave={handleMouseLeave} // Reset when mouse leaves
//       >
//         <p className="cursor-pointer px-4 py-2">{item.name}</p>
        
//         {/* Only render submenu when the item is hovered */}
//         {item.subMenu && item.subMenu.length > 0 && hoveredItemId === item.id && (
//           <ul 
//             className="absolute  left-0 hidden group-hover:block hover:block bg-white shadow-md min-w-[180px] z-10"
//             style={{ top: '0px', left: '100%' }} // Positioning submenus to the right of the parent menu
//             onMouseEnter={() => handleMouseEnter(item.id)} // Set the hovered item ID when mouse enters
//         // onMouseLeave={handleMouseLeave} 
//           >
//             {/* Recursively render submenus */}
//             {renderMenu(item.subMenu, depth + 1)}
//           </ul>
//         )}
//       </li>
//     ));
//   };


// const [isOpen, setIsOpen] = useState(false);

// const toggleMenu = () => {
//   setIsOpen(!isOpen);
// };

  return (
    // <div className="container mx-auto">
    //   <ul className="flex flex-row space-x-5 mx-5 text-sm justify-center items-center">
    //     {renderMenu(categories)}
    //   </ul>
    // </div>
//     <div className="container mx-auto">
//     {/* Hamburger Icon */}
//     <div className="flex justify-between items-center px-5 py-3 md:hidden">
//       <button onClick={toggleMenu} className="text-xl">
//         &#9776; {/* Hamburger icon (three horizontal bars) */}
//       </button>
//     </div>

//     {/* Menu Items */}
//     <ul className={`flex flex-row space-x-1 xs:flex-col xs:bg-white xs:absolute xs:z-49 text-sm justify-center items-center md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
//       <li className="cursor-pointer px-2 py-2">Desi Grocery</li>
//       <li className="cursor-pointer px-2 py-2">Beauty & Wellness</li>
//       <li className="cursor-pointer px-2 py-2">Food & Drinks</li>
//       <li className="cursor-pointer px-2 py-2">Fashion Accessories</li>
//       <li className="cursor-pointer px-2 py-2">Home & Kitchen</li>
//       <li className="cursor-pointer px-2 py-2">New Arrivals</li>
//       <li className="cursor-pointer px-2 py-2">Discover Brands</li>
//       <li className="cursor-pointer px-2 py-2">Careers</li>
//       <li className="cursor-pointer px-2 py-2">Private Label</li>
//     </ul>
//   </div>



// <div className="flex flex-row space-x-4 text-sm justify-center">
//   {categories.map((x) => (
//     <div key={x.id} className="relative group">
//       <p className="cursor-pointer">{x.name}</p>

//       {x.subMenu && x.subMenu.length > 0 && (
//         <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//           {x.subMenu.map((sub) => (
//             <li key={sub.id} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//               {sub.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//  
// </div>
<div className=" hidden md:flex justify-center items-center">
      <Menu categories={categories} />
    </div>
  )

}

export default LowerNav;
