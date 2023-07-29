import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductCard() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.map((item) => (
            <MDBCol size="md" className="mb-3" key={item.id} style={{maxWidth: '350px'}}>
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." style={{maxHeight: '240px'}} />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBBtn onClick={()=>dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
