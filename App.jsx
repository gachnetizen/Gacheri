import React from "react";


function App() {
  return (
    <div className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff"
        }}
      >
        <p style={{
          color: "blue",
          fontSize: 28,
          fontWeight: "bolder",
          marginTop: 0,
        }}>Pulse</p>
        <p style={{ color: "#7c92eae7" }}>Share your moments with the world.</p>
      </div>
      <div
        style={{
          width: "55vh",
          border: "1px solid black",
          padding: 10,
          borderRadius: 10,
          borderColor: "#e2e0e2",
          gap: 1,
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",


        }}>
        <p style={{ marginLeft: 20, fontSize: 12 }}>EMAIL OR USERNAME</p>
        <input style={{ borderRadius: 10, height: 30, width: "90%", backgroundColor: "#fcfcfc", border: "1px solid gray", alignSelf: "center" }} type="text" placeholder="you@gmail.com" />
        <p style={{ marginLeft: 20, fontSize: 12 }}>PASSWORD</p>
        <input style={{ borderRadius: 10, height: 30, width: "90%", backgroundColor: "#fcfcfc", border: "1px solid gray", alignSelf: "center" }} type="password" placeholder="••••••••" />
        <span
          style={{ alignSelf: "right", marginRight: 20, fontSize: 12, color: "blue", margin: 20, }}>FORGOT  PASSWORD?</span>

        <button
          style={{
            width: "100%",
            height: 40,
            borderRadius: 16,
            border: "none",
            backgroundColor: "#3257c6e7",
            color: "white",
            fontWeight: "bolder",
          }}
        >LOG IN</button>
        <p style={{ textAlign: "center" }}>or</p>
        <button
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#e2e0e2",
            color: "black",
            fontWeight: "bolder",
            border: "none",
            borderRadius: 16,
          }}
        >Continue with Google</button>
        <p style={{ color: "grey" }}>Don't have an account? <a href="#">Sign up free</a></p>
      </div>
    </div >
  );
}

export default App;
