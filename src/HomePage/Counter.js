import { Img } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const items = [
    { label: 'Faculty', number: 480  },
    { label: 'Students', number: 980  },
    { label: 'project ', number: 2040 },
    { label: 'Staff', number: 1018 },
  ];

  const [counts, setCounts] = useState(items.map(() => 0));

  useEffect(() => {
    const intervals = items.map((item, index) => {
      const stop = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < item.number) {
            newCounts[index]++;
          } else {
            clearInterval(stop);
          }
          return newCounts;
        });
      }, 50);

      return stop;
    });

    return () => {
      intervals.forEach((stop) => clearInterval(stop));
    };
  }, [items]);

  return (
    <>
      <style>{`
        #counter {
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 30px 0px;
          width: 100%;
          // margin-left: 5%;
           background-image: url('https://t3.ftcdn.net/jpg/05/74/70/60/360_F_574706059_s4gBUvmVNHeD0XYkVra822kli7NbWsgt.jpg'); 
          background-size: cover; 
          background-position: center center; 
          background-repeat: no-repeat; 
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.9);
          border-radius:0px;
        }
      
        #counter .item {
          background: #fff;
          width: calc(20% - 20px);
          margin: 10px;
          padding: 35px 40px;
          text-align: center;
          border-radius: 20px;
          -webkit-box-shadow: 0px 0px 38px -8px rgba(0, 0, 0, 0.34);
          -moz-box-shadow: 0px 0px 38px -8px rgba(0, 0, 0, 0.34);
          box-shadow: 0px 0px 38px -8px rgba(0, 0, 0, 0.34);
        } 
        #counter .item .count {
          color: black;
          margin-bottom: 5px;
          font-size: 40px;
        }
        #counter .item h3 {
          color: black;
          text-transform: capitalize;
        }

        @media (max-width: 768px) {
          #counter .item {
            width: calc(100% - 20px);
          }
        }
      `}</style>
        <h1
        className='spre'
        style={{
          fontWeight: 'bold',
          marginLeft: '5%',
          textAlign: 'center',
          '@media (max-width: 600px)': {
            marginLeft: '10%', 
          },
        }}
      >
      {/* Counter <em>Sssutms</em> */}
      </h1><br/>
    
      <div id="counter">
        {items.map((item, index) => (
          <div key={index} className="item">
            <h1 className="count">{counts[index]}</h1>
            <h3 className="text">{item.label}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Counter;
