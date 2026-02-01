import { useParams, Link } from "react-router-dom";
import collectionsData from "../data/collections.json";
import "./CSS/CollItemPage.css";

export default function CollItemPage() {
  const { id } = useParams(); // item id from URL

  // Flatten all items and attach their collection id
  const allItems = collectionsData.flatMap((collection) =>
    collection.items.map((item) => ({ ...item, collectionId: collection.id }))
  );

  const item = allItems.find((i) => i.id === id);

  if (!item) {
    return <h2 style={{ color: "white" }}>Item not found</h2>;
  }

  return (
    <>
      <div>
        {/* Back to collection link */}
        <Link
          to={`/collection/${item.collectionId}`}
          style={{ color: "white", display: "block", marginTop: "20px", marginLeft: "20px" }}
        >
          ← Back to collection
        </Link>
      </div>
      <div className="collitempage_container">
        {/* Item Title */}
        <h1>{item.object_type}</h1>

        {/* Item Card */}
        <div className="item_card_container">
          <div className="card">
            <img
              className="card_image"
              src={item.cloudinaryUrl}
              alt={item.object_type}
            />
            <div className="card_text">
              <p><strong>Maker:</strong> {item.artist_maker}</p>
              <p><strong>Date:</strong> {item.primary_date}</p>
              <p><strong>Origin:</strong> {item.origin}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="actions_container">
            <button className="button-2" type="submit">Edit Item</button>
            <button className="button-2" type="submit">Delete Item</button>
            <button className="button-2" type="submit">Print</button>
            <button className="button-2" type="submit">Preview</button>
            <hr />
            <li>Share on your social media</li>

            <div className="social_media_icons">
              <div className="social1">
                <a href="/Facebook">
                  <img className="social-containerf" src="/Facebook.svg" alt="Facebook" />
                </a>
              </div>
              <div className="social1">
                <a href="/Twitter">
                  <img className="social-containert" src="/Twitter.svg" alt="Twitter" />
                </a>
              </div>
              <div className="social1">
                <a href="/Instagram">
                  <img className="social-containeri" src="/Instagram.svg" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p style={{ margin: 20, color: "grey" }}>
            * This is a read-only demo of items. Actions like edit, delete, print and preview are intentionally disabled.
          </p>
        </div>
        <div>
          {/* Back to collection link */}
          <Link
            to={`/collection/${item.collectionId}`}
            style={{ color: "white", display: "block", margin: "20px" }}
          >
            ← Back to collection
          </Link>
        </div>
      </div>
    </>
  );
}





