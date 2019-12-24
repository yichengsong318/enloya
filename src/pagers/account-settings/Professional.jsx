import React, {Component} from 'react';
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { createData, updateData, readData, deleteData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { FormDate, FormDateSplit, FormInput, FormSelect, FormUpload } from '../../shared/FormElement';

export class Professional extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      headline: {
        editing: false,
        value : props.userInfo.headline || 'Edit to add a headline',
      },  
      academicDegrees: {
        adding: false,
        editing: false,
        editingId: '',
        curItem: {
          degree: '',
          university: '',
          year: ''
        },
        value : props.academicDegrees || [],
      }  
    }
  }

  componentDidMount() {
    this.readAD(true);
  }

  handleChange = (name, value) => {
    this.setState({[name]: {...this.state[name], value: value }});
  };

  handlePrChange = (prop, name, value) => {
    this.setState({
      [prop]: {
        ...this.state[prop], 
        curItem: {
          ...this.state[prop].curItem,
          [name]: value
        }
      }
    });
  };

  startPrEditing = (prop, id, curItem) => {
    this.setState({[prop]: {
      ...this.state[prop], 
      editing: true, 
      adding: false,
      editingId: id,
      curItem: curItem
    }});
  };

  readPr = (endpoint, prop, curItem, hideNotif) => {
    this.props.readData(endpoint, {lawyerId: this.props.userInfo.id}, () => {

      if (!hideNotif) {
        NotificationManager.success("The changes were added!", "Success !", 3000);
      }
      
      this.setState({
        [prop]: {
          ...this.state[prop], 
          adding: false, 
          editing: false,
          editingId: '',
          curItem: curItem,
          value: this.props[prop]
        }
      });
    });
  };

  savePr = (endpoint, prop) => {
    if (!this.props.loading) {
      if (this.state[prop].editing) {
        this.props.updateData(endpoint, this.state[prop].editingId, 
          this.state[prop].curItem, () => {
            this.readAD();
          }
        );
      } else if (this.state[prop].adding) {
        this.props.createData(endpoint, { 
          ...this.state[prop].curItem,
          lawyerId: this.props.userInfo.id,
        }, () => {
          this.readAD();
        });
      }
    }
  };

  startEditing = (name, value) => {
    this.setState({[name]: {...this.state[name], editing: value}});
  };

  startAdding = (name, value) => {
    this.setState({[name]: {...this.state[name], adding: value}});
  };

  saveHeadline = () => {
    if (!this.props.loading) {
      this.props.updateData('lawyers', this.props.userInfo.id, 
        {headline: this.state.headline.value}, () => {
        this.props.loadMe(() => {
          NotificationManager.success("The changes were saved!", "Success !", 3000);
          this.setState({headline: { editing : false, value : this.props.userInfo.headline || ''}});
        });
      });
    }
  };

  startADEditing = (item) => {
    this.startPrEditing('academicDegrees', item.id, {
      degree: item.degree,
      university: item.university,
      year: item.year
    });
  };

  handleADChange = (name, value) => {
    this.handlePrChange('academicDegrees', name, value);
  };

  readAD = (hideNotif) => {
    this.readPr('academic-degrees', 'academicDegrees', {
      degree: '',
      university: '',
      year: ''
    }, hideNotif);
  };

  saveAD = () => {
    this.savePr('academic-degrees', 'academicDegrees');
  };

  deleteAD = (id) => {
    if (!this.props.loading) {
      this.props.deleteData('academic-degrees', id, () => {
        this.readAD();
      });
    }
  }
  
  render () {
    const { userInfo } = this.props;

    return (
      <div className="py-4 px-2 account-settings">
        <h2 className="mt-2 mb-3">Professional Background</h2>
        <div>
          <div className="d-flex justify-content-between">
            <h5>Headline</h5>
            { this.state.headline.editing ?  
              <span className="btn btn-primary btn-sm"  onClick={() => {this.saveHeadline(true)}}>Save</span>
              :
              <span className="btn btn-link" onClick={() => {this.startEditing('headline', true)}}>Edit</span>
            }
          </div>
          { this.state.headline.editing ?
            <textarea className="form-control my-3" rows={3} 
              onChange={(e) => {this.handleChange('headline', e.target.value)}}
              defaultValue={this.state.headline.value}></textarea>
            : 
            <p>{userInfo.headline}</p>}
        </div>
        <div>
          <h5>Licences</h5>
          <div className="d-flex justify-content-between">
            <div>New York, 2015 (Licence # 110200)</div>
            <span className="btn btn-link">Delete</span>
          </div>
          <div className="d-flex justify-content-between">
            <div>UK, 2018 (Licence # 110200, Barrister)</div>
            <span className="btn btn-link">Delete</span>
          </div>
          <span className="btn btn-link px-0">Add Another Licence</span>
          <div className="bg-lighter px-3 py-4">
            <div className="row">
              <div className="col-sm-6">
                <FormInput label="Licensed in?" type="text" id="licensedin" placeholder="Country / State / Provinence" noHelp/>
                <FormInput label="Licence Number" type="number" id="licensednumber" noHelp/>
              </div>
              <div className="col-sm-10">
                <FormUpload dropColor="bg-white" label="Proof of license/admission to bar" id="proof" noHelp />
              </div>
              <div className="col-sm-6">
                <FormSelect label="Licensed since" id="licensedsince" selected="undefined" choices={[
                  { value: 'undefined', label: 'Please Select' },
                  { value: '2019', label: '2019' },
                  { value: '2018', label: '2018' },
                  { value: '2017', label: '2017' }
                ]} noHelp />
              </div>
              <div className="col-sm-12">
                <div className="p-4 text-right">
                  <button type="button" className="btn btn-primary px-5">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h5>Academic degrees:</h5>
          { this.state.academicDegrees.value.map(academicDegree => {
              return (
                <div key={academicDegree.id} className="d-flex justify-content-between">
                  <div>{academicDegree.degree}, {academicDegree.university}, {academicDegree.year}</div>
                  <div>
                    <span className="btn btn-link mr-1" onClick={() => {this.startADEditing(academicDegree)}}>Edit</span>
                    <span className="btn btn-link" onClick={() => {this.deleteAD(academicDegree.id)}}>Delete</span>
                  </div>
                </div>
              );
            }
          )}
          <span className="btn btn-link px-0" 
            onClick={() => {this.startAdding('academicDegrees', !this.state.academicDegrees.adding)}}
            >{ this.state.academicDegrees.adding ? 'Cancel' : 'Add Another Degree'}</span>

          { (this.state.academicDegrees.adding || this.state.academicDegrees.editing) && 
            <div className="bg-lighter px-3 py-4">
              <div className="row">
                <div className="col-sm-6">
                  <FormInput label="Degree" type="text" id="degree" placeholder="Degree" 
                    value={this.state.academicDegrees.curItem.degree} name="degree" onChange={this.handleADChange} noHelp/>
                  <FormInput label="University" type="text" id="university" placeholder="University" 
                    value={this.state.academicDegrees.curItem.university} name="university" onChange={this.handleADChange} noHelp/>
                </div>
                <div className="col-sm-12"></div>
                <div className="col-sm-5">
                  <FormInput label="Year" type="number" id="year" placeholder="Year"
                    value={this.state.academicDegrees.curItem.year} name="year" onChange={this.handleADChange} noHelp/>
                </div>
                <div className="col-sm-12">
                  <div className="p-4 text-right">
                    <button type="button" className="btn btn-primary px-5" 
                      onClick={() => {this.saveAD()}}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="mt-5">
          <h5>Professionnal Experience: </h5>
          <div className="d-flex justify-content-between my-3">
            <div>
              <div className="font-weight-bold">Associate, Linklaters</div>
              <div>February 2017 - Present</div>
              <div>London, UK</div>
              <div>Advising Fortune 500 companies in technology</div>
              <div>transfer issues</div>
            </div>
            <span className="btn btn-link">Edit</span>
          </div>
          <div className="d-flex justify-content-between my-3">
            <div>
              <div className="font-weight-bold">Summer Associate, Baker &amp; McKenzie</div>
              <div>February 2016 - Present</div>
              <div>London, UK</div>
              <div>Legal research for Fortune 500 companies in </div>
              <div>connection with technology transfer issues</div>
            </div>
            <span className="btn btn-link">Edit</span>
          </div>
          <span className="btn btn-link px-0">Add Another Experience</span>
          <div className="bg-lighter px-3 py-4">
            <div className="row">
              <div className="col-sm-4">
                <FormDateSplit label="From" id="exp-from" noIcon/>
              </div>
              <div className="col-sm-4">
                <FormDateSplit label="To" id="exp-to" noIcon/>
              </div>
              <div className="col-sm-12"></div>
              <div className="col-sm-8">
                <FormInput label="Title" type="text" id="exp-title" noHelp/>
              </div>
              <div className="col-sm-10">
                <FormInput label="Description" type="text" id="exp-description" noHelp/>
              </div>
              <div className="col-sm-12"></div>
              <div className="col-sm-12">
                <div className="p-4 text-right">
                  <button type="button" className="btn btn-primary px-5">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h5>Publications</h5>
          <div className="d-flex justify-content-between">
            <div>
              <div className="font-weight-bold">International Transfer Contracts in Nigeria</div>
              <div>Challenges for Tech Startups in the Medtech Sector,</div>
              <div>Journal of Legal Studies, 2010 available at</div>
              <div>www.jls.com</div>
            </div>
            <span className="btn btn-link">Edit</span>
          </div>
          <span className="btn btn-link px-0">Add Another Publication</span>
          <div className="bg-lighter px-3 py-4">
            <div className="row">
              <div className="col-sm-6">
                <FormInput label="Title" type="text" id="pub-title" noHelp/>
                <FormInput label="Publication Publisher" type="text" id="pub-publisher" noHelp/>
              </div>
              <div className="col-sm-12"></div>
              <div className="col-sm-4">
                <FormDate label="Publication Date" type="text" id="pub-date" placeholder="    /    /    " noHelp/>
              </div>
              <div className="col-sm-12"></div>
              <div className="col-sm-6">
                <FormInput label="Publication URL" type="url" id="pub-url" noHelp />
              </div>
              <div className="col-sm-12">
                <div className="p-4 text-right">
                  <button type="button" className="btn btn-primary px-5">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h5>Memberships</h5>
          <div className="d-flex justify-content-between">
            <div>
              <div>Member, International Bar Association</div>
              <div>(www.ibanet.org)</div>
            </div>
          </div>
          <span className="btn btn-link px-0">Add Another Membership</span>
          <div className="bg-lighter px-3 py-4">
            <div className="row">
              <div className="col-sm-6">
                <FormInput label="Title" type="text" id="member-title" noHelp/>
                <FormInput label="Association/Society/Bar/Institution" type="text" id="member-type" noHelp/>
                <FormInput label="URL" type="url" id="member-url" noHelp/>
              </div>
              <div className="col-sm-12">
                <div className="p-4 text-right">
                  <button type="button" className="btn btn-primary px-5">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { academicDegrees } = data;

  return { userType, userInfo, user, academicDegrees };
};

const mapActionToProps = {
  createData,
  updateData, 
  readData,
  deleteData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Professional));
