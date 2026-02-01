import { Link } from "react-router-dom";
import collectionsData from "../data/collections.json";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: auto;
  height: 400px;
  cursor: pointer;
  background: #3c3c3c;
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CollectionName = styled.h2`
  margin: 10px 0;
`;

const CardDescription = styled.p`
  padding: 20px;
`;

export default function Collection() {
  return (
    <div className="collection_header">
      <h1>Welcome to your collections!</h1>

      <CardsContainer>
        {collectionsData.length > 0 ? (
          collectionsData.map((collection) => (
            <Link to={`/collection/${collection.id}`} key={collection.id}>
              <Card>
                <CardImage src={collection.cloudinaryUrl} alt={collection.name} />
                <CollectionName>{collection.name}</CollectionName>
                <CardDescription>{collection.description}</CardDescription>
              </Card>
            </Link>
          ))
        ) : (
          <h2 style={{ color: "white" }}>No collections found!</h2>
        )}
      </CardsContainer>
      <div>
        <p style={{ margin: 20, color: "grey" }}>
        * This is a read-only demo of collections. Actions like add, edit, delete are intentionally disabled.
      </p>
      </div>
    </div>
  );
}






