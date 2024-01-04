import React , { useState } from 'react'
import { Link } from 'react-router-dom'


const Meetings = () => {

const [filter, setFilter] = useState('all'); 
// Initial filter state 
  const handleFilterClick = (filterValue) => {
    setFilter(filterValue); 
  };
   

  const itemsData = [
    { category: 'soon', title: 'New Kbisa Lecturers Meeting', date: 'Nov 12', price: '$14.00' ,image: '/assets/images/meeting-1.jpg'},
    { category: 'all', title: 'New  Kabisa Lecturers Meeting', date: 'Nov 12', price: '$14.00',image: '/assets/images/meeting-1.jpg' },

    { category: 'all', title: 'Online Kbisa Teaching Techniques', date: 'Nov 14', price: '$22.00' ,image: '/assets/images/meeting-2.jpg' },
    { category: 'imp', title: 'Online Teaching Techniques', date: 'Nov 14', price: '$22.00',image: '/assets/images/meeting-2.jpg' },

    { category: 'all', title: 'Network Teaching Concept', date: 'Nov 16', price: '$24.00' ,image: '/assets/images/meeting-3.jpg' },
    { category: 'soon', title: 'Network Teaching Concept', date: 'Nov 16', price: '$24.00' ,image: '/assets/images/meeting-1.jpg' },

    { category: 'all', title: 'Online Teaching Tools', date: 'Nov 18', price: '$32.00' ,image: '/assets/images/meeting-4.jpg' },
    { category: 'att', title: 'Online Teaching Tools', date: 'Nov 18', price: '$32.00' ,image: '/assets/images/meeting-4.jpg' },

    { category: 'all', title: 'New Teaching Techniques', date: 'Nov 22', price: '$34.00',image: '/assets/images/meeting-5.jpg' },
    { category: 'att', title: 'New Teaching Techniques', date: 'Nov 22', price: '$34.00' ,image: '/assets/images/meeting-5.jpg' },

    { category: 'all', title: 'Technology Conference', date: 'Nov 24', price: '$52.00',image: '/assets/images/meeting-3.jpg' },
    { category: 'imp', title: 'Technology Conference', date: 'Nov 24', price: '$52.00' ,image: '/assets/images/meeting-3.jpg'},

    { category: 'all', title: 'Online Teaching Techniques', date: 'Nov 27', price: '$34.00' ,image: '/assets/images/meeting-1.jpg'},
    { category: 'imp', title: 'Online Teaching Techniques', date: 'Nov 27', price: '$34.00' ,image: '/assets/images/meeting-1.jpg' },
    { category: 'att', title: 'Online Teaching Techniques', date: 'Nov 27', price: '$34.00' ,image: '/assets/images/meeting-1.jpg' },

    { category: 'all', title: 'Online Social Networking', date: 'Nov 30', price: '$74.00',image: '/assets/images/meeting-3.jpg' },
    { category: 'soon', title: 'Online Social Networking', date: 'Nov 30', price: '$74.00',image: '/assets/images/meeting-3.jpg' },
    { category: 'att', title: 'Online Social Networking', date: 'Nov 30', price: '$74.00' ,image: '/assets/images/meeting-3.jpg' },

    { category: 'all', title: 'Instant Lecture Design', date: 'Nov 28', price: '$64.00' ,image: '/assets/images/meeting-2.jpg' },
    { category: 'soon', title: 'Instant Lecture Design', date: 'Nov 28', price: '$64.00',image: '/assets/images/meeting-2.jpg' },
    { category: 'imp', title: 'Instant Lecture Design', date: 'Nov 28', price: '$64.00',image: '/assets/images/meeting-2.jpg' }

  ];
  return (
    <div>
  <section className="heading-page header-text" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6>Here are our upcoming meetings</h6>
          <h2>Upcoming Meetings</h2>
        </div>
      </div>
    </div>
  </section>

  <section className="meetings-page" id="meetings">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">

          <div className="col-lg-12">
       <div className="filters">
      <ul>
        <li onClick={() => handleFilterClick('all')}>All</li>
        <li onClick={() => handleFilterClick('soon')}>Soon</li>
        <li onClick={() => handleFilterClick('imp')}>Important</li>
        <li onClick={() => handleFilterClick('att')}>Attractive</li>
      </ul>
      </div>

       {/* Render items based on the selected filter */}
      <div className="row grid">
        {itemsData.map((item, index) => {
   
          const { category, title, date, price,image } = item; 

                // Check if the item matches the selected filter or if 'all' is selected 
          if (filter === category) 
            return (
              <div className={`col-lg-4 templatemo-item-col all ${category}`} key={index}>
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price">
                      <span>{price}</span>
                    </div>
                   <Link to ="/meeting-details">  <img src={process.env.PUBLIC_URL + image} alt="meeting details" /> </Link>
                  </div>
                  <div className="down-content">
                    <div className="date">
                      <h6>Nov <span>{date}</span></h6>
                    </div>
                    <h4>{title}</h4>
                    <p>Mambo  in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
              </div>
        
        );
          

   
     return null; // If the item doesn't match the filter, don't render it
        })}
      </div>
    </div>


            
            <div className="col-lg-12">
              <div className="pagination">
                <ul>
                  <li><a href="/"><i className="fa fa-angle-right"></i></a></li>
                  <li><a href="/">1</a></li>
                  <li className="active"><a href="/">2</a></li>
                  <li><a href="/">3</a></li>
                  <li><a href="/"><i className="fa fa-angle-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Copyright © 2023 Leki Emmanuel . All Rights Reserved. 
          <br />linkedin: <a href="/" target="_parent" title="school website">Leki Academy</a></p>
    </div>
  </section>
    </div>
  )
}

export default Meetings