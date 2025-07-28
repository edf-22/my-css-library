<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Table</title>
  <link rel="stylesheet" href="CSS\bootstrap.min.css">
  <!-- <link rel="stylesheet" href="CSS\default.css"> -->
  <!-- <link rel="stylesheet" href="CSS\timepass.css"> -->
</head>

<body>
  <table>
    <tr>
      <th>One</th>
      <th>Two</th>
      <th>Three</th>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  </table>

  <br><br><br>

  <!-- <table data-component="table" borderStyle="solid" backgroundColor="#f0f0f0" color="#333" hoverRowColor="#d0e7ff" cellPadding="12px" striped="true" textAlign="center"> -->
  <table data-component="table">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </table>

  <br><br><br>
  <section class="mt-70">
    <div class="container">
      <div class="row">
        <div class="col">
          <table data-component="table" class="hoverRowColor-#777777 headerHoverBg-#777777">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Alice</td>
              <td>25</td>
              <td>Alice</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>30</td>
              <td>Bob</td>
              <td>30</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>

  <br><br><br>
  <table data-component="table" class="bg-#f0f0f0 color-#333 border-solid hoverRowColor-#d0e7ff cellPad-12px striped textAlign-center header-fontSize-18px headerHoverBg-#777777">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </table>


  <br><br><br>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <table data-component="table" class="bg-black color-#fff border-solid hoverRowColor-#737373 cellPadding-15px striped stripedColor-#e2e2e2 textAlign-left header-fontSize-18px headerHoverBg-#ecec2a headerBg-#332">
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Alice</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>30</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>

  <br><br><br>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <table data-component="table" class="my-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tr>
              <td>Alice</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>30</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- <br><br><br>
<section>
    <div class="container">
        <div class="row">
            <div class="col">
                <table data-component="table">
                    <thead>
                        <tr><th class="my-tb">Name</th><th>Age</th></tr>
                    </thead>
                    <tr><td class="my-tb">Alice</td><td>25</td></tr>
                    <tr><td class="my-tb">Bob</td><td>30</td></tr>
                    <tr><td class="my-tb">Bob</td><td>30</td></tr>
                    <tr><td class="my-tb">Bob</td><td>30</td></tr>
                </table>
            </div>
        </div>
    </div>
</section> -->


  <br><br><br>
  <table
    data-component="table"
    class="
    headerBg-blue striped stripedColor-lightblue lastRowBg-blue lastRowColor-white hoverRowColor-#737373 hoverLastRow-#777777 hoverLastRowText-#fff border-2px_solid">
    <!-- or can add this - altColsColor-magenta-pink for column specific customization -->
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </table>


  <br><br><br>

  <table
    data-component="table"
    class="
    headerBg-blue striped stripedColor-lightblue lastRowBg-blue lastRowColor-white col-0-color-green hoverLastRow-#737373 border-2px_solid_white">

    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </table>
  <br><br><br>

  <table data-component="table" id="my-script-table">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </table>

  <br><br><br>

  <table id="myTable2" class="bg-white color-black header-fontSize-16px">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row1 Col1</td>
        <td>Row1 Col2</td>
        <td>Row1 Col3</td>
      </tr>
      <tr>
        <td>Row2 Col1</td>
        <td>Row2 Col2</td>
        <td>Row2 Col3</td>
      </tr>
      <tr>
        <td>Row3 Col1</td>
        <td>Row3 Col2</td>
        <td>Row3 Col3</td>
      </tr>
    </tbody>
  </table>

  <br><br><br>
  <br><br><br>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="table-wrapper">
            <table data-component="table" class="my-table" data-sticky-col="true" data-sticky-header="true">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tr>
                <td>Alice hohdownd kfhwofn fokmx Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit eligendi earum nesciunt animi voluptatem! Labore, eligendi accusantium. Magni dolorem alias odit beatae cumque eveniet fuga neque vitae quos necessitatibus?</td>
                <td>25 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, esse.</td>
                <td>Alice hohdownd kfhwofn fokmx Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit eligendi earum nesciunt animi voluptatem! Labore, eligendi accusantium. Magni dolorem alias odit beatae cumque eveniet fuga neque vitae quos necessitatibus?</td>
                <td>25 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, esse.</td>
              </tr>
              <tr>
                <td>Bob dihfwf ihwonf Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis minus voluptatem harum vitae temporibus ratione, magnam assumenda, amet maxime aspernatur laudantium fugiat. Quis magni, libero repellat harum eius ex vitae?</td>
                <td>30 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, maiores.</td>
                <td>Alice hohdownd kfhwofn fokmx Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit eligendi earum nesciunt animi voluptatem! Labore, eligendi accusantium. Magni dolorem alias odit beatae cumque eveniet fuga neque vitae quos necessitatibus?</td>
                <td>25 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, esse.</td>
              </tr>
              <tr>
                <td>Bob ncolndf sjn idjpwdj Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium possimus ab enim perferendis nobis odit voluptatibus libero? Ea, rem unde dolorem aperiam, animi, voluptatem aut soluta sunt perferendis minus cum.</td>
                <td>30 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ad?</td>
                <td>Alice hohdownd kfhwofn fokmx Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit eligendi earum nesciunt animi voluptatem! Labore, eligendi accusantium. Magni dolorem alias odit beatae cumque eveniet fuga neque vitae quos necessitatibus?</td>
                <td>25 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, esse.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br><br><br>


  <table data-component="table" class="hoverRowColor-none hoverTextColor-none headerHoverBg-none" data-sticky-header="true">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </table>
  <br><br><br>
  
  <br><br><br>
  <table data-component="table" class="headerBg-yellow bg-yellow color-black hoverRowColor-#cceeff hoverTextColor-#000000" data-sticky-header="true">
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>

    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </table>

  <script src="Components\table.js"></script>

  <script>
    TableLib.setCustomTable('#my-script-table', {
      // Equivalent to headerBg-blue
      headerStyle: {
        backgroundColor: 'blue'
      },

      // Equivalent to striped and stripedColor-lightblue
      striped: true,
      stripedColor: 'lightblue',

      // Equivalent to lastRowBg-blue and lastRowColor-white
      lastRowBackground: 'blue',
      lastRowColor: 'white',

      // Equivalent to col-0-color-green
      columnColors: {
        0: 'green' // Colors first column green
      },

      // You can add additional script-only customizations:
      cellPadding: '10px',
      border: '1px solid #ddd'
      //   hoverRowColor: '#e6f7ff'
    });
  </script>

  <script>
    // Assuming your CSSComponent or TableLib exposes a method for script-based customization:
    TableLib.setCustomTable("#myTable2", {
      lastRowBg: "#f0f8ff", // light blue background for last row
      columnColors: {
        0: 'red'
      }, // first column text color red
      colColor: 'red', //colColor is by default for column[0]  
      headerFontSize: '18px', // larger font size for header
      border: "2px solid black" // add black border to table
    });
  </script>

  <!-- <script>
    TableLib.setCustomTable('.my-table', {
      striped: true,
      stripedColor: 'pink',
      cellFontSize: '25px',
      backgroundColor: 'black',
      color: '#fff',
      headerFontSize: '20px',
      border: '2px dashed #fff',
      hoverRowColor: '#737373',
      hoverTextColor: '#f0f0f0',
      cellPadding: '20px',
      textAlign: 'left',
      lastRowBg: 'yellow',
      headerStyle: {
      backgroundColor: '#333',
      color: '#fff',
      fontWeight: 'bold',
      hoverBg: '#777777'
      }
    });
</script> -->

  <script>
    TableLib.setCustomTable('.my-table', {
      backgroundColor: '#f5f5f5',
      lastRowBackground: 'yellow',
      textAlign: 'justify',
      columnColors: {
        0: '#ffebee', // First column
        2: '#e8f5e9' // Third column
      },
      altColsColor: ['#f9f9f9', '#ffffff'],
      striped: true,
      headerStyle: {
        backgroundColor: '#329',
        color: 'white'
      }
    });
  </script>

  <!-- or ... the below is not completely working..-->
  <!-- <script>
    TableLib.setCustomTable('.my-table', {
  bg: '#f5f5f5',          // Alternative to backgroundColor
  lastRowBg: 'yellow',     // Alternative to lastRowBackground
  
  colColor: '#ffebee',     // Colors first column (alternative to columnColors)
  altColsColor: 'lightgray-white', // String alternative to array
  
  striped: true,
  headerStyle: {
    headerBg: '#329',      // Alternative to backgroundColor in headerStyle
    headerColor: 'white'   // Alternative to color in headerStyle
  }
});
</script> -->

  <script>
    TableLib.setCustomTable('.my-tb', {
      striped: true,
      stripedColor: 'pink',
      cellFontSize: '25px',
      backgroundColor: 'black',
      color: '#fff',
      headerFontSize: '20px',
      border: '2px dashed #fff',
      hoverRowColor: '#737373',
      hoverTextColor: '#f0f0f0',
      cellPadding: '20px',
      textAlign: 'left',
      headerStyle: {
        backgroundColor: '#333',
        color: '#fff',
        fontWeight: 'bold',
        hoverBg: '#777777'
      }
    });
  </script>

</body>

</html>