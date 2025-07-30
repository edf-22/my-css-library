<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enhanced Table Component Demo</title>

  <!-- <link rel="stylesheet" href="CSS/bootstrap.min.css"> -->

  <?php
  // include 'full-form.php'; 
  ?>

  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    h1,
    h2 {
      color: #333;
    }

    .demo-section {
      margin-bottom: 40px;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 5px;
    }

    .controls {
      margin: 15px 0;
      padding: 10px;
      background: #f5f5f5;
      border-radius: 5px;
    }

    .multiple-fields-table tbody {
      border: 1px solid black;
      display: table;
      width: 100%;
    }

    .multiple-fields-table th {
      border-right: 2px solid black !important;
    }

    .multiple-fields-table {
      border: 1px solid #000 !important;
    }
  </style>
</head>

<body>
  <h1>Enhanced Table Component Demo</h1>

  <!-- Demo 1: Basic Styled Table -->
  <div class="demo-section">
    <h2>1. Basic Styled Table</h2>
    <p>Demonstrates original styling features with class-based configuration.</p>
    <table data-component="table" class="bg-f9f9f9 border-1px_solid_#ddd cellPadding-10px striped hoverRowColor-#e6f7ff">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Smith</td>
          <td>Marketing</td>
          <td>$75,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sarah Johnson</td>
          <td>Engineering</td>
          <td>$95,000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Michael Brown</td>
          <td>Sales</td>
          <td>$85,000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Emily Davis</td>
          <td>HR</td>
          <td>$65,000</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Robert Wilson</td>
          <td>Engineering</td>
          <td>$110,000</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Demo 2: Sortable Table -->
  <div class="demo-section">
    <h2>2. Sortable Table</h2>
    <p>Click on column headers to sort. Different sort types are configured.</p>
    <table data-component="table" class="border-1px_solid_#ccc cellPadding-8px striped">
      <thead>
        <tr>
          <th data-sortable>Name</th>
          <th data-sortable data-sort-type="number">Age</th>
          <th data-sortable data-sort-type="date">Join Date</th>
          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Smith</td>
          <td>32</td>
          <td>2020-05-15</td>
          <td>Marketing</td>
          <td>75000</td>
        </tr>
        <tr>
          <td>Sarah Johnson</td>
          <td>28</td>
          <td>2019-11-22</td>
          <td>Engineering</td>
          <td>95000</td>
        </tr>
        <tr>
          <td>Michael Brown</td>
          <td>41</td>
          <td>2018-03-10</td>
          <td>Sales</td>
          <td>85000</td>
        </tr>
        <tr>
          <td>Emily Davis</td>
          <td>35</td>
          <td>2021-01-05</td>
          <td>HR</td>
          <td>65000</td>
        </tr>
        <tr>
          <td>Robert Wilson</td>
          <td>45</td>
          <td>2017-07-30</td>
          <td>Engineering</td>
          <td>110000</td>
        </tr>
        <tr>
          <td>Lisa Miller</td>
          <td>29</td>
          <td>2022-02-18</td>
          <td>Marketing</td>
          <td>72000</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Demo 3: Filterable Table -->
  <div class="demo-section">
    <h2>3. Filterable Table</h2>
    <p>Filter inputs appear below filterable columns. Try typing in any filter box.</p>
    <table data-component="table" class="bg-white border-1px_solid_#999 cellPadding-12px hoverRowColor-#f0f0f0">
      <thead>
        <tr>
          <th data-filterable>Product</th>
          <th data-filterable>Category</th>
          <th data-filterable data-sortable data-sort-type="number">Price</th>
          <th data-filterable>Status</th>
          <th data-filterable data-sortable data-sort-type="number">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Laptop Pro</td>
          <td>Electronics</td>
          <td>1200</td>
          <td>In Stock</td>
          <td>45</td>
        </tr>
        <tr>
          <td>Wireless Mouse</td>
          <td>Accessories</td>
          <td>35</td>
          <td>In Stock</td>
          <td>120</td>
        </tr>
        <tr>
          <td>Bluetooth Headphones</td>
          <td>Audio</td>
          <td>150</td>
          <td>Low Stock</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Smartphone X</td>
          <td>Electronics</td>
          <td>899</td>
          <td>Out of Stock</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Keyboard</td>
          <td>Accessories</td>
          <td>75</td>
          <td>In Stock</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Monitor 27"</td>
          <td>Electronics</td>
          <td>350</td>
          <td>In Stock</td>
          <td>22</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Demo 4: Paginated Table -->
  <div class="demo-section">
    <h2>4. Paginated Table</h2>
    <p>Table with pagination controls (5 rows per page).</p>
    <table data-component="table" data-paginate data-rows-per-page="5" class="bg-white border-1px_solid_#ddd cellPadding-10px striped">
      <thead>
        <tr>
          <th data-sortable>Order ID</th>
          <th data-sortable data-sort-type="date">Date</th>
          <th data-filterable>Customer</th>
          <th data-sortable data-sort-type="number">Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1001</td>
          <td>2023-01-15</td>
          <td>John Smith</td>
          <td>120.00</td>
          <td>Shipped</td>
        </tr>
        <tr>
          <td>1002</td>
          <td>2023-01-16</td>
          <td>Sarah Johnson</td>
          <td>85.50</td>
          <td>Processing</td>
        </tr>
        <tr>
          <td>1003</td>
          <td>2023-01-17</td>
          <td>Michael Brown</td>
          <td>220.00</td>
          <td>Delivered</td>
        </tr>
        <tr>
          <td>1004</td>
          <td>2023-01-18</td>
          <td>Emily Davis</td>
          <td>65.75</td>
          <td>Shipped</td>
        </tr>
        <tr>
          <td>1005</td>
          <td>2023-01-19</td>
          <td>Robert Wilson</td>
          <td>350.20</td>
          <td>Processing</td>
        </tr>
        <tr>
          <td>1006</td>
          <td>2023-01-20</td>
          <td>Lisa Miller</td>
          <td>42.99</td>
          <td>Delivered</td>
        </tr>
        <tr>
          <td>1007</td>
          <td>2023-01-21</td>
          <td>David Taylor</td>
          <td>128.00</td>
          <td>Shipped</td>
        </tr>
        <tr>
          <td>1008</td>
          <td>2023-01-22</td>
          <td>Anna Clark</td>
          <td>95.50</td>
          <td>Processing</td>
        </tr>
        <tr>
          <td>1009</td>
          <td>2023-01-23</td>
          <td>James White</td>
          <td>210.00</td>
          <td>Delivered</td>
        </tr>
        <tr>
          <td>1010</td>
          <td>2023-01-24</td>
          <td>Olivia Martin</td>
          <td>75.25</td>
          <td>Shipped</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Demo 5: All Features Combined -->
  <!-- <div class="demo-section"> -->
  <h2>5. All Features Combined</h2>
  <p>Table with sorting, filtering, pagination, and styling features all working together.</p>
  <div class="controls">
    <p>This table demonstrates:</p>
    <ul>
      <li>Sorting (click on column headers with arrows)</li>
      <li>Filtering (type in the filter boxes below headers)</li>
      <li>Pagination (5 rows per page)</li>
      <li>Striped rows and hover effects</li>
      <li>Custom column styling</li>
    </ul>
  </div>
  <table data-component="table" data-paginate data-rows-per-page="5"
    class="bg-fafafa border-2px_solid_#333 cellPadding-12px striped hoverRowColor-#e6e6ff 
                     col-0-bgcolor-#f0f8ff col-3-bgcolor-#fffacd headerBg-#333 headerColor-white">
    <thead>
      <tr>
        <th data-sortable data-filterable>Employee</th>
        <th data-sortable data-filterable>Position</th>
        <th data-sortable data-sort-type="date" data-filterable>Hire Date</th>
        <th data-sortable data-sort-type="number" data-filterable>Salary</th>
        <th data-sortable data-filterable>Office</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tiger Nixon</td>
        <td>System Architect</td>
        <td>2011-04-25</td>
        <td>320800</td>
        <td>Edinburgh</td>
      </tr>
      <tr>
        <td>Garrett Winters</td>
        <td>Accountant</td>
        <td>2011-07-25</td>
        <td>170750</td>
        <td>Tokyo</td>
      </tr>
      <tr>
        <td>Ashton Cox</td>
        <td>Junior Technical Author</td>
        <td>2009-01-12</td>
        <td>86000</td>
        <td>San Francisco</td>
      </tr>
      <tr>
        <td>Cedric Kelly</td>
        <td>Senior Javascript Developer</td>
        <td>2012-03-29</td>
        <td>433060</td>
        <td>Edinburgh</td>
      </tr>
      <tr>
        <td>Airi Satou</td>
        <td>Accountant</td>
        <td>2008-11-28</td>
        <td>162700</td>
        <td>Tokyo</td>
      </tr>
      <tr>
        <td>Brielle Williamson</td>
        <td>Integration Specialist</td>
        <td>2012-12-02</td>
        <td>372000</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Herrod Chandler</td>
        <td>Sales Assistant</td>
        <td>2012-08-06</td>
        <td>137500</td>
        <td>San Francisco</td>
      </tr>
      <tr>
        <td>Rhona Davidson</td>
        <td>Integration Specialist</td>
        <td>2010-10-14</td>
        <td>327900</td>
        <td>Tokyo</td>
      </tr>
      <tr>
        <td>Colleen Hurst</td>
        <td>Javascript Developer</td>
        <td>2009-09-15</td>
        <td>205500</td>
        <td>San Francisco</td>
      </tr>
      <tr>
        <td>Sonya Frost</td>
        <td>Software Engineer</td>
        <td>2008-12-13</td>
        <td>103600</td>
        <td>Edinburgh</td>
      </tr>
      <tr>
        <td>Jena Gaines</td>
        <td>Office Manager</td>
        <td>2008-12-19</td>
        <td>90560</td>
        <td>London</td>
      </tr>
      <tr>
        <td>Quinn Flynn</td>
        <td>Support Lead</td>
        <td>2013-03-03</td>
        <td>342000</td>
        <td>Edinburgh</td>
      </tr>
    </tbody>
  </table>



  <!-- </div> -->

  <!-- table with subtle UI -->
  <br><br><br>
  <!-- <div class=""> -->
  <h2>Table with subtle UI</h2>
  <table data-component="table" data-paginate data-rows-per-page="5"
    class="bg-fafafa headerBg-#333 headerColor-white">
    <!-- striped hoverRowColor-#d9f3fa  -->
    <thead>
      <tr>
        <th data-sortable data-filterable>Employee</th>
        <th data-sortable data-filterable>Position</th>
        <th data-sortable data-sort-type="date" data-filterable>Hire Date</th>
        <th data-sortable data-sort-type="number" data-filterable>Salary</th>
        <th data-sortable data-filterable>Office</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tiger Nixon</td>
        <td>System Architect</td>
        <td>2011-04-25</td>
        <td>320800</td>
        <td>Edinburgh</td>
      </tr>
      <tr>
        <td>Garrett Winters</td>
        <td>Accountant</td>
        <td>2011-07-25</td>
        <td>170750</td>
        <td>Tokyo</td>
      </tr>
      <tr>
        <td>Ashton Cox</td>
        <td>Junior Technical Author</td>
        <td>2009-01-12</td>
        <td>86000</td>
        <td>San Francisco</td>
      </tr>
      <tr>
        <td>Cedric Kelly</td>
        <td>Senior Javascript Developer</td>
        <td>2012-03-29</td>
        <td>433060</td>
        <td>Edinburgh</td>
      </tr>
      <tr>
        <td>Airi Satou</td>
        <td>Accountant</td>
        <td>2008-11-28</td>
        <td>162700</td>
        <td>Tokyo</td>
      </tr>
      <tr>
        <td>Brielle Williamson</td>
        <td>Integration Specialist</td>
        <td>2012-12-02</td>
        <td>372000</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Herrod Chandler</td>
        <td>Sales Assistant</td>
        <td>2012-08-06</td>
        <td>137500</td>
        <td>San Francisco</td>
      </tr>
      <tr>
        <td>Rhona Davidson</td>
        <td>Integration Specialist</td>
        <td>2010-10-14</td>
        <td>327900</td>
        <td>Tokyo</td>
      </tr>
      <tr>
        <td>Colleen Hurst</td>
        <td>Javascript Developer</td>
        <td>2009-09-15</td>
        <td>205500</td>
        <td>San Francisco</td>
      </tr>
      <tr>
        <td>Sonya Frost</td>
        <td>Software Engineer</td>
        <td>2008-12-13</td>
        <td>103600</td>
        <td>Edinburgh</td>
      </tr>
      <tr>
        <td>Jena Gaines</td>
        <td>Office Manager</td>
        <td>2008-12-19</td>
        <td>90560</td>
        <td>London</td>
      </tr>
      <tr>
        <td>Quinn Flynn</td>
        <td>Support Lead</td>
        <td>2013-03-03</td>
        <td>342000</td>
        <td>Edinburgh</td>
      </tr>
    </tbody>
  </table>
  <!-- </div> -->

  <!-- Demo 6: Sticky Headers/Columns -->
  <div class="demo-section">
    <h2>6. Sticky Headers/Columns</h2>
    <p>Table with sticky headers and first column (scroll to test).</p>
    <table data-component="table" data-sticky-col data-sticky-header="true"
      class="bg-white border-1px_solid_#ddd cellPadding-8px" style="max-height: 200px;">
      <thead>
        <tr>
          <th data-sortable>Name</th>
          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Q1</th>
          <th data-sortable data-sort-type="number">Q2</th>
          <th data-sortable data-sort-type="number">Q3</th>
          <th data-sortable data-sort-type="number">Q4</th>
          <th data-sortable data-sort-type="number">Total</th>

          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Q1</th>
          <th data-sortable data-sort-type="number">Q2</th>
          <th data-sortable data-sort-type="number">Q3</th>
          <th data-sortable data-sort-type="number">Q4</th>
          <th data-sortable data-sort-type="number">Total</th>
          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Q1</th>
          <th data-sortable data-sort-type="number">Q2</th>
          <th data-sortable data-sort-type="number">Q3</th>
          <th data-sortable data-sort-type="number">Q4</th>
          <th data-sortable data-sort-type="number">Total</th>
          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Q1</th>
          <th data-sortable data-sort-type="number">Q2</th>
          <th data-sortable data-sort-type="number">Q3</th>
          <th data-sortable data-sort-type="number">Q4</th>
          <th data-sortable data-sort-type="number">Total</th>
          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Q1</th>
          <th data-sortable data-sort-type="number">Q2</th>
          <th data-sortable data-sort-type="number">Q3</th>
          <th data-sortable data-sort-type="number">Q4</th>
          <th data-sortable data-sort-type="number">Total</th>
          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Q1</th>
          <th data-sortable data-sort-type="number">Q2</th>
          <th data-sortable data-sort-type="number">Q3</th>
          <th data-sortable data-sort-type="number">Q4</th>
          <th data-sortable data-sort-type="number">Total</th>
          <th data-sortable>Department</th>
          <th data-sortable data-sort-type="number">Q1</th>
          <th data-sortable data-sort-type="number">Q2</th>
          <th data-sortable data-sort-type="number">Q3</th>
          <th data-sortable data-sort-type="number">Q4</th>
          <th data-sortable data-sort-type="number">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Smith</td>
          <td>Sales</td>
          <td>12500</td>
          <td>14300</td>
          <td>11800</td>
          <td>16200</td>
          <td>54800</td>
        </tr>
        <tr>
          <td>Sarah Johnson</td>
          <td>Marketing</td>
          <td>8900</td>
          <td>9200</td>
          <td>10500</td>
          <td>11200</td>
          <td>39800</td>
        </tr>
        <tr>
          <td>Michael Brown</td>
          <td>Engineering</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Emily Davis</td>
          <td>HR</td>
          <td>3200</td>
          <td>2900</td>
          <td>3100</td>
          <td>3500</td>
          <td>12700</td>
        </tr>
        <tr>
          <td>Robert Wilson</td>
          <td>Sales</td>
          <td>15200</td>
          <td>16800</td>
          <td>14500</td>
          <td>18200</td>
          <td>64700</td>
        </tr>
        <tr>
          <td>Lisa Miller</td>
          <td>Marketing</td>
          <td>7600</td>
          <td>8100</td>
          <td>8900</td>
          <td>9500</td>
          <td>34100</td>
        </tr>
        <tr>
          <td>David Taylor</td>
          <td>Engineering</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>John Smith</td>
          <td>Sales</td>
          <td>12500</td>
          <td>14300</td>
          <td>11800</td>
          <td>16200</td>
          <td>54800</td>
        </tr>
        <tr>
          <td>Sarah Johnson</td>
          <td>Marketing</td>
          <td>8900</td>
          <td>9200</td>
          <td>10500</td>
          <td>11200</td>
          <td>39800</td>
        </tr>
        <tr>
          <td>Michael Brown</td>
          <td>Engineering</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Emily Davis</td>
          <td>HR</td>
          <td>3200</td>
          <td>2900</td>
          <td>3100</td>
          <td>3500</td>
          <td>12700</td>
        </tr>
        <tr>
          <td>Robert Wilson</td>
          <td>Sales</td>
          <td>15200</td>
          <td>16800</td>
          <td>14500</td>
          <td>18200</td>
          <td>64700</td>
        </tr>
        <tr>
          <td>Lisa Miller</td>
          <td>Marketing</td>
          <td>7600</td>
          <td>8100</td>
          <td>8900</td>
          <td>9500</td>
          <td>34100</td>
        </tr>
        <tr>
          <td>David Taylor</td>
          <td>Engineering</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>John Smith</td>
          <td>Sales</td>
          <td>12500</td>
          <td>14300</td>
          <td>11800</td>
          <td>16200</td>
          <td>54800</td>
        </tr>
        <tr>
          <td>Sarah Johnson</td>
          <td>Marketing</td>
          <td>8900</td>
          <td>9200</td>
          <td>10500</td>
          <td>11200</td>
          <td>39800</td>
        </tr>
        <tr>
          <td>Michael Brown</td>
          <td>Engineering</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Emily Davis</td>
          <td>HR</td>
          <td>3200</td>
          <td>2900</td>
          <td>3100</td>
          <td>3500</td>
          <td>12700</td>
        </tr>
        <tr>
          <td>Robert Wilson</td>
          <td>Sales</td>
          <td>15200</td>
          <td>16800</td>
          <td>14500</td>
          <td>18200</td>
          <td>64700</td>
        </tr>
        <tr>
          <td>Lisa Miller</td>
          <td>Marketing</td>
          <td>7600</td>
          <td>8100</td>
          <td>8900</td>
          <td>9500</td>
          <td>34100</td>
        </tr>
        <tr>
          <td>David Taylor</td>
          <td>Engineering</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  </div>






  <!-- try new features  -->
  <div class="demo-container">
    <h2>1. Fully Editable Table with All Features</h2>
    <table data-component="table" data-editable data-selectable class="bg-f5f5f5 border-1px_solid_#ddd cellPadding-10px">
      <thead>
        <tr>
          <th data-sortable data-sort-type="text">Name</th>
          <th data-sortable data-sort-type="number">Age</th>
          <th data-sortable data-filterable data-sort-type="text">Department</th>
          <th data-editable="true" data-filterable>Position</th>
          <th data-sortable data-sort-type="number">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-editable="true">John Doe</td>
          <td data-editable="true">32</td>
          <td>Marketing</td>
          <td data-editable="true">Manager</td>
          <td data-editable="true">75000</td>
        </tr>
        <tr>
          <td data-editable="true">Jane Smith</td>
          <td data-editable="true">28</td>
          <td>Sales</td>
          <td data-editable="true">Associate</td>
          <td data-editable="true">55000</td>
        </tr>
        <tr>
          <td data-editable="true">Mike Johnson</td>
          <td data-editable="true">45</td>
          <td>IT</td>
          <td data-editable="true">Director</td>
          <td data-editable="true">95000</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>32</td>
          <td>Marketing</td>
          <td>Manager</td>
          <td>75000</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="demo-container">
    <h2>2. View-Only Table with Sorting and Filtering</h2>
    <table data-component="table" data-view-only class="striped border-1px_solid_#ccc">
      <thead>
        <tr>
          <th data-sortable>Product</th>
          <th data-sortable data-filterable>Category</th>
          <th data-sortable data-sort-type="number">Price</th>
          <th data-sortable data-sort-type="number">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Laptop</td>
          <td>Electronics</td>
          <td>999.99</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Desk Chair</td>
          <td>Furniture</td>
          <td>149.99</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Smartphone</td>
          <td>Electronics</td>
          <td>699.99</td>
          <td>22</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="demo-container">
    <h2>3. Paginated Table with Column-Specific Features</h2>
    <table data-component="table" data-paginate data-rows-per-page="2" class="bg-fff border-1px_solid_#eee">
      <thead>
        <tr>
          <th data-sortable>ID</th>
          <th data-sortable data-filterable>Username</th>
          <th data-editable="true">Email</th>
          <th data-sortable data-sort-type="date">Join Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>johndoe</td>
          <td data-editable="true">john@example.com</td>
          <td>2023-01-15</td>
        </tr>
        <tr>
          <td>2</td>
          <td>janesmith</td>
          <td data-editable="true">jane@example.com</td>
          <td>2023-02-20</td>
        </tr>
        <tr>
          <td>3</td>
          <td>mikej</td>
          <td data-editable="true">mike@example.com</td>
          <td>2023-03-10</td>
        </tr>
        <tr>
          <td>4</td>
          <td>sarahw</td>
          <td data-editable="true">sarah@example.com</td>
          <td>2023-04-05</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="demo-container">
    <h2>4. Sticky Header & Column Table</h2>
    <div style="height: 200px; overflow: auto;">
      <table data-component="table" data-sticky-header data-sticky-col class="bg-fff">
        <thead>
          <tr>
            <th>Month</th>
            <th>Sales</th>
            <th>Expenses</th>
            <th>Profit</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>$12,000</td>
            <td>$8,000</td>
            <td>$4,000</td>
            <td>+5%</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$15,000</td>
            <td>$9,500</td>
            <td>$5,500</td>
            <td>+12%</td>
          </tr>
          <tr>
            <td>March</td>
            <td>$18,000</td>
            <td>$10,000</td>
            <td>$8,000</td>
            <td>+20%</td>
          </tr>
          <tr>
            <td>April</td>
            <td>$16,500</td>
            <td>$9,800</td>
            <td>$6,700</td>
            <td>+15%</td>
          </tr>
          <tr>
            <td>May</td>
            <td>$20,000</td>
            <td>$11,000</td>
            <td>$9,000</td>
            <td>+25%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="demo-container">
    <h2>5. Table with Custom Styling</h2>
    <table data-component="table" class="bg-f9f9f9 border-2px_solid_#333 cellPadding-12px striped hoverRowColor-ffffcc hoverTextColor-333333 headerBg-333 headerColor-fff">
      <thead>
        <tr>
          <th>Country</th>
          <th>Capital</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Russia <br>
            USA <br>
            Europe
          </td>
          <td>Washington D.C.</td>
          <td>331 million</td>
        </tr>
        <tr>
          <td>Canada</td>
          <td>Ottawa</td>
          <td>38 million</td>
        </tr>
        <tr>
          <td>UK</td>
          <td>London</td>
          <td>67 million</td>
        </tr>
      </tbody>
    </table>
  </div>

  <br><br><br>
  <table data-component="table" class="multiple-fields-table">
    <!-- <thead>
      <tr>
        <th>Country</th>
        <th>Capital</th>
        <th>Population</th>
      </tr>
    </thead> -->
    <tbody class="border-1px_solid_#000">
      <tr>
        <th rowspan="3">Country</th> <!-- Spans 3 rows -->
        <td>Russia</td>
      </tr>
      <tr>
        <td>USA</td>
      </tr>
      <tr>
        <td>Europe</td>
      </tr>
    </tbody>
    <tbody class="border-1px_solid_#000">
      <tr>
        <th rowspan="3">Country</th> <!-- Spans 3 rows -->
        <td>Russia</td>
      </tr>
      <tr>
        <td>USA</td>
      </tr>
      <tr>
        <td>Europe</td>
      </tr>
    </tbody>
    <tbody class="border-1px_solid_#000">
      <tr>
        <th rowspan="3">Country</th> <!-- Spans 3 rows -->
        <td>Russia</td>
      </tr>
      <tr>
        <td>USA</td>
      </tr>
      <tr>
        <td>Europe</td>
      </tr>
    </tbody>
  </table>



  <script>
    // You can also configure tables via JavaScript
    TableLib.setCustomTable('.custom-table', {
      backgroundColor: '#f0f8ff',
      border: '1px solid #4682b4',
      striped: true,
      stripedColor: '#e6f2ff',
      hoverRowColor: '#d4e6ff'
    });
  </script>


  <script src="Components\table.js"></script>


</body>

</html>