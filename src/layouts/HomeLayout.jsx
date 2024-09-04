import styles from "./HomeLayout.module.css";

export default function HomeLayoutTest() {
  return (
    <>
      {/* grid container */}
      <div className={styles.flexContainer}>
        <div
          className={styles.flexItem1}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "assets/images/mesh1.png"
            })`,
          }}
        >
          <div className={styles.card}>
            <h1>About this React Router Project</h1>
            <p>
              In this project, I've developed a dynamic web application to
              showcase my proficiency with React Router V6. This project is
              designed to illustrate various advanced features and concepts
              within React Router, demonstrating how they can be leveraged to
              build a robust and scalable application.
            </p>
          </div>
        </div>
        <div className={styles.flexItem2}>
          <div className={styles.itemHead}>
            <h3>Key Features Demonstrated</h3>
            <p>
              This project serves as a comprehensive example of how React Router
              can be used to handle various routing and data management
              scenarios, providing a solid foundation for building sophisticated
              and user-friendly web applications.
            </p>
          </div>
          <div className={styles.gridContainer}>
            <div
              className={styles.gridItem}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/mesh9.png"
                })`,
              }}
            >
              <div>
                <h5>Layouts and Index Routes</h5>
              </div>
              {/* <p>
                Implemented layout components and index routes to manage and
                structure different views within the application efficiently.
              </p> */}
            </div>

            <div
              className={styles.gridItem}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/mesh11.png"
                })`,
              }}
            >
              <div>
                <h5>Nested Routes</h5>
              </div>
              {/* <p>
                Utilized nested routing to create a hierarchical structure for
                the application’s views, allowing for a more organized and
                intuitive navigation experience.
              </p> */}
            </div>

            <div
              className={styles.gridItem}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/mesh13.png"
                })`,
              }}
            >
              <div>
                <h5>Filtering Results</h5>
              </div>

              {/* <p>
                Integrated search parameters to filter and display results
                dynamically.
              </p> */}
            </div>

            <div
              className={styles.gridItem}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/mesh14.png"
                })`,
              }}
            >
              <div>
                <h5>Protected Routes </h5>
              </div>

              {/* <p>
                Implemented route protection to ensure that certain areas of the
                application are accessible only to authenticated users.
              </p> */}
            </div>

            <div
              className={styles.gridItem}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/mesh10.png"
                })`,
              }}
            >
              <div>
                <h5>Deferring Data</h5>
              </div>

              {/* <p>
                Demonstrated the use of deferred data loading techniques to
                optimize the performance and responsiveness of the application.
              </p> */}
            </div>

            <div
              className={styles.gridItem}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/mesh6.png"
                })`,
              }}
            >
              <div>
                <h5>Data Router APIs</h5>
              </div>
              {/* <p>
                Employed the data router APIs, including loaders and actions, to
                handle data fetching and manipulation within the routes.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
