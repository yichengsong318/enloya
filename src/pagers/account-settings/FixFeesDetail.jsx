import React from 'react';

function FixFeesDetail() {

  return (
    <div className="py-4 px-4 account-settings">
      <h2 className="mt-2 mb-3">Fixed-Fee Services</h2>
      <div className="bg-lighter px-4 py-4">
        <div className="d-flex justify-content-between">
          <div>
            <h4>General</h4>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <table className="table table-borderless">
          <tbody>
            <tr><th>Title</th><td>Professional Legal Requirements</td></tr>
            <tr><th>Category</th><td>Main Category</td></tr>
            <tr><th>Subcategory</th><td>Sub Category</td></tr>
            <tr><th>Client Type</th><td>SME's Large Enterprise International organizations</td></tr>
            <tr><th>Industry</th><td>Law and Litigation</td></tr>
            <tr><th>Search Tags</th><td>Law Litigation International</td></tr>
          </tbody>
        </table>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Description and pricing</h4>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <table className="table table-borderless">
          <tbody>
            <tr><th>Price</th><td>$499.99</td></tr>
            <tr><th>Short Description</th><td>Short description goes there</td></tr>
            <tr><th>Description</th><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,</td></tr>
            <tr><th>Client Type</th><td>SME's Large Enterprise International organizations</td></tr>
            <tr><th>Delivery Time</th><td>5 days</td></tr>
          </tbody>
        </table>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Frequently asked questions</h4>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <table className="table table-borderless">
          <tbody>
            <tr><th>Question</th><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,</td></tr>
            <tr><th>Answer</th><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,</td></tr>
            <tr><th>Question</th><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,</td></tr>
            <tr><th>Answer</th><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,</td></tr>
          </tbody>
        </table>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Requirements</h4>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <table className="table table-borderless">
          <tbody>
            <tr><th>Requirement One</th><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,</td></tr>
            <tr><th>Requirement Two</th><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FixFeesDetail;
