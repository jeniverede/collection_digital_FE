import { useParams, Link } from "react-router-dom";
import collectionsData from "../data/collections.json";
import styled from "styled-components";

// Styled components
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
  width: 250px;
  height: auto;
  cursor: pointer;
  background: #3c3c3c;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 200px;
  max-width: 180px;
  object-fit: cover;
  border-bottom: 1px solid black;
`;

const ItemName = styled.h2`
  margin: 10px 0;
`;

const CardDescription = styled.p`
  padding: 20px;
`;

export default function CollectionView() {
  const { id } = useParams();
  const collection = collectionsData.find((c) => c.id === id);

  if (!collection) {
    return <h2 style={{ color: "white" }}>Collection not found</h2>;
  }

  return (
    <>
      <div>
        <Link
          to="/collection"
          style={{ color: "white", marginTop: "10px", marginLeft: "20px", display: "inline-block" }}
        >
          ← Back to all collections
        </Link>
      </div>
      <div className="collection_view">
        <h1 style={{ marginLeft: "20px", color: "#03c8c8" }}>{collection.name}</h1>
        <p style={{ marginLeft: "20px", color: "white" }}>{collection.description}</p>

        <CardsContainer>
          {collection.items.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
              <Card>
                <CardImage src={item.cloudinaryUrl} alt={item.object_type} />
                <ItemName>{item.object_type}</ItemName>
                <CardDescription>{item.artist_maker || "Maker unknown"}</CardDescription>
              </Card>
            </Link>
          ))}
        </CardsContainer>
      </div>
      <div>
        <p style={{ margin: 20, color: "grey" }}>
          * This is a read-only demo of collection items. Actions like add, edit, or delete are intentionally disabled.
        </p>
      </div>
      <div>
        <Link
          to="/collection"
          style={{ color: "white", margin: "20px", display: "inline-block" }}
        >
          ← Back to all collections
        </Link>
      </div>
    </>
  );
}





