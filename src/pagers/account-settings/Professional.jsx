import React, {Component} from 'react';
import { connect } from "react-redux";
import Moment from 'react-moment';
import { NotificationManager } from "react-notifications";
import { createData, updateData, readData, deleteData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { FormDate, FormInput, FormUpload, FormCheck, FormSelect } from '../../shared/FormElement';

export class Professional extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: {
        editing: false,
        value : props.userInfo.title,
        placeholder: 'Edit to add a title'
      }, 
      shortDescription: {
        editing: false,
        value : props.userInfo.shortDescription,
        placeholder: 'Edit to add a short description'
      },  
      longDescription: {
        editing: false,
        value : props.userInfo.longDescription,
        placeholder: 'Edit to add a long description'
      },  
      currentPosition: {
        editing: false,
        value : props.userInfo.currentPosition,
        placeholder: 'Edit to select a current position'
      },  
      specializationInputs: {
        editing: false,
        value: props.userInfo.specializations ? props.userInfo.specializations.map(l => l.id) : [],
        placeholder: 'Edit to select your specializations'
      },
      typeInputs: {
        editing: false,
        value: props.userInfo.types ? props.userInfo.types.map(l => l.id)[0] : null,
        placeholder: 'Edit to select your lawyer type'
      },
      academicDegrees: {
        adding: false,
        editing: false,
        editingId: '',
        initItem: {
          degree: '',
          university: '',
          year: ''
        },
        curItem: {
          degree: '',
          university: '',
          year: ''
        },
        value : props.academicDegrees || [],
      },  
      memberships: {
        adding: false,
        editing: false,
        editingId: '',
        initItem: {
          title: '',
          association: '',
          url: ''
        },
        curItem: {
          title: '',
          association: '',
          url: ''
        },
        value : props.memberships || [],
      },
      publications: {
        adding: false,
        editing: false,
        editingId: '',
        initItem: {
          title: '',
          publisher: '',
          date: '',
          url: ''
        },
        curItem: {
          title: '',
          publisher: '',
          date: '',
          url: ''
        },
        value : props.publications || [],
      },
      proexperiences: {
        adding: false,
        editing: false,
        editingId: '',
        initItem: {
          title: '',
          description: '',
          fromDate: '',
          toDate: null,
          present: false,
          where: ''
        },
        curItem: {
          title: '',
          description: '',
          fromDate: '',
          toDate: null,
          present: false,
          where: ''
        },
        value : props.proexperiences || [],
      },
      licences: {
        adding: false,
        editing: false,
        editingId: '',
        initItem: {
          where: '',
          since: '',
          // proof: '',
          proofFile: '',
          number: '',
          hasFile: true
        },
        curItem: {
          where: '',
          since: '',
          proofFile: '',
          number: '',
          hasFile: true
        },
        value : props.licences || [],
      }  
    }
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('specializations');
    readData('lawyer-types');

    this.readAD(true);
    this.readM(true);
    this.readP(true);
    this.readPE(true);
    this.readL(true);
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

  readPr = (endpoint, prop, hideNotif) => {
    this.props.readData(endpoint, {lawyer: this.props.userInfo.id}, () => {
      if (!hideNotif) {
        NotificationManager.success("The changes were added!", "Success !", 3000);
      }
      
      this.setState({
        [prop]: {
          ...this.state[prop], 
          adding: false, 
          editing: false,
          editingId: '',
          curItem: this.state[prop].initItem,
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
            this.readPr(endpoint, prop);
          }
        );
      } else if (this.state[prop].adding) {
        this.props.createData(endpoint, { 
          ...this.state[prop].curItem,
          lawyerId: this.props.userInfo.id,
        }, () => {
          this.readPr(endpoint, prop);
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

  saveAttr = (name) => {
    if (!this.props.loading) {
      this.props.updateData('lawyers', this.props.userInfo.id, 
        {[name]: this.state[name].value}, () => {
        this.props.loadMe(() => {
          NotificationManager.success("The changes were saved!", "Success !", 3000);
          let value = this.props.userInfo[name] || '';

          if (name === 'specializationInputs') {
            value = this.props.userInfo.specializations ? this.props.userInfo.specializations.map(l => l.id) : [];
          } else if (name === 'typeInputs') {
            value = this.props.userInfo.types ? this.props.userInfo.types.map(l => l.id)[0] : null;
          }

          this.setState({[name]: { editing : false, value : value}});
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
    this.readPr('academic-degrees', 'academicDegrees', hideNotif);
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
  
  startMEditing = (item) => {
    this.startPrEditing('memberships', item.id, {
      title: item.title,
      association: item.association,
      url: item.url
    });
  };

  handleMChange = (name, value) => {
    this.handlePrChange('memberships', name, value);
  };

  readM = (hideNotif) => {
    this.readPr('memberships', 'memberships', hideNotif);
  };

  saveM = () => {
    this.savePr('memberships', 'memberships');
  };

  deleteM = (id) => {
    if (!this.props.loading) {
      this.props.deleteData('memberships', id, () => {
        this.readM();
      });
    }
  }
  
  startPEditing = (item) => {
    this.startPrEditing('publications', item.id, {
      title: item.title,
      publisher: item.publisher,
      date: new Date(item.date),
      url: item.url
    });
  };

  handlePChange = (name, value) => {
    this.handlePrChange('publications', name, value);
  };

  readP = (hideNotif) => {
    this.readPr('publications', 'publications', hideNotif);
  };

  saveP = () => {
    this.savePr('publications', 'publications');
  };

  deleteP = (id) => {
    if (!this.props.loading) {
      this.props.deleteData('publications', id, () => {
        this.readP();
      });
    }
  }

  startLEditing = (item) => {
    this.startPrEditing('licences', item.id, {
      where: item.where,
      since: item.since,
      proof: item.proof,
      number: item.number
    });
  };

  handleLChange = (name, value) => {
    this.handlePrChange('licences', name, value);
  };

  readL = (hideNotif) => {
    this.readPr('licences', 'licences', hideNotif);
  };

  saveL = () => {
    this.savePr('licences', 'licences');
  };

  deleteL = (id) => {
    if (!this.props.loading) {
      this.props.deleteData('licences', id, () => {
        this.readL();
      });
    }
  }

  startPEditing = (item) => {
    this.startPrEditing('proexperiences', item.id, {
      title: item.title,
      description: item.description,
      fromDate: new Date(item.fromDate),
      toDate: new Date(item.toDate),
      present: item.present,
      where: item.where
    });
  };

  handlePEChange = (name, value) => {
    this.handlePrChange('proexperiences', name, value);
  };

  readPE = (hideNotif) => {
    this.readPr('proexperiences', 'proexperiences', hideNotif);
  };

  savePE = () => {
    this.savePr('proexperiences', 'proexperiences');
  };

  deletePE = (id) => {
    if (!this.props.loading) {
      this.props.deleteData('proexperiences', id, () => {
        this.readPE();
      });
    }
  }
  
  render () {
    const { userInfo, proexperiences } = this.props;
    const currentPosition = proexperiences && proexperiences.find(pe => pe.id === userInfo.currentPosition);
    const currentPositionLabel = currentPosition ? currentPosition.title + ' at ' + currentPosition.where : null;
    const specializations = userInfo.specializations || [];
    const types = userInfo.types || [];

    return (
      <div className="py-4 px-2 account-settings">
        <h2 className="mt-2 mb-3">Professional Background</h2>
        <div>
          <div className="d-flex justify-content-between">
            <h5>Title</h5>
            { this.state.title.editing ?  
              <span className="btn btn-primary btn-sm"  onClick={() => {this.saveAttr('title')}}>Save</span>
              :
              <span className="btn btn-link" onClick={() => {this.startEditing('title', true)}}>Edit</span>
            }
          </div>
          { this.state.title.editing ?
            <input className="form-control my-3" type="text"
              onChange={(e) => {this.handleChange('title', e.target.value)}}
              defaultValue={this.state.title.value} placeholder={this.state.title.placeholder}/>
            : 
            <p>{userInfo.title || this.state.title.placeholder}</p>}
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h5>Short Description</h5>
            { this.state.shortDescription.editing ?  
              <span className="btn btn-primary btn-sm"  onClick={() => {this.saveAttr('shortDescription')}}>Save</span>
              :
              <span className="btn btn-link" onClick={() => {this.startEditing('shortDescription', true)}}>Edit</span>
            }
          </div>
          { this.state.shortDescription.editing ?
            <textarea className="form-control my-3 h-100" rows={2}
              onChange={(e) => {this.handleChange('shortDescription', e.target.value)}}
              defaultValue={this.state.shortDescription.value} placeholder={this.state.shortDescription.placeholder}/>
            : 
            <p>{userInfo.shortDescription || this.state.shortDescription.placeholder}</p>}
        </div>        
        <div>
          <div className="d-flex justify-content-between">
            <h5>Long Description</h5>
            { this.state.longDescription.editing ?  
              <span className="btn btn-primary btn-sm"  onClick={() => {this.saveAttr('longDescription')}}>Save</span>
              :
              <span className="btn btn-link" onClick={() => {this.startEditing('longDescription', true)}}>Edit</span>
            }
          </div>
          { this.state.longDescription.editing ?
            <textarea className="form-control my-3 h-100" rows={5}
              onChange={(e) => {this.handleChange('longDescription', e.target.value)}}
              defaultValue={this.state.longDescription.value} placeholder={this.state.longDescription.placeholder}/>
            : 
            <p>{userInfo.longDescription || this.state.longDescription.placeholder}</p>}
        </div>
        <div>
          <div className="d-flex justify-content-between mb-2">
            <h5>Current Position</h5>
            { this.state.currentPosition.editing ?  
              <span className="btn btn-primary btn-sm"  onClick={() => {this.saveAttr('currentPosition')}}>Save</span>
              :
              <span className="btn btn-link" onClick={() => {this.startEditing('currentPosition', true)}}>Edit</span>
            }
          </div>
          { this.state.currentPosition.editing ?
            <FormSelect id="currentPosition" 
              selected={this.state.currentPosition.value}
              name="currentPosition" onChange={this.handleChange}
              choices={this.props.proexperiences
                  .map(ind => {ind.value = ind.id; ind.label = ind.title + ' at ' + ind.where; return ind})}
              noHelp/>
            : 
            <p>{currentPositionLabel || this.state.currentPosition.placeholder}</p>}
        </div>
        <div>
          <div className="d-flex justify-content-between mb-2">
            <h5>Specializations</h5>
            { this.state.specializationInputs.editing ?  
              <span className="btn btn-primary btn-sm"  onClick={() => {this.saveAttr('specializationInputs')}}>Save</span>
              :
              <span className="btn btn-link" onClick={() => {this.startEditing('specializationInputs', true)}}>Edit</span>
            }
          </div>
          { this.state.specializationInputs.editing ?
            <div className="row">
              <div className="col-sm-8">
                <FormSelect id="specializations" 
                  selected={this.state.specializationInputs.value} isMulti
                  name="specializationInputs" onChange={this.handleChange}
                  choices={this.props.specializations.map(ind => {ind.value = ind.id; return ind})}
                  noHelp/>
              </div>
            </div>
            : 
            <p><strong>{specializations.map(s => s.label).join(', ') || this.state.specializationInputs.placeholder}</strong></p>}
        </div>
        <div>
          <div className="d-flex justify-content-between mb-2">
            <h5>Lawyer Type</h5>
            { this.state.typeInputs.editing ?  
              <span className="btn btn-primary btn-sm"  onClick={() => {this.saveAttr('typeInputs')}}>Save</span>
              :
              <span className="btn btn-link" onClick={() => {this.startEditing('typeInputs', true)}}>Edit</span>
            }
          </div>
          { this.state.typeInputs.editing ?
            <div className="row">
              <div className="col-sm-8">
                <FormSelect id="types" 
                  selected={this.state.typeInputs.value}
                  name="typeInputs" onChange={this.handleChange}
                  choices={this.props.lawyerTypes.map(ind => {ind.value = ind.id; return ind})}
                  noHelp/>
              </div>
            </div>
            : 
            <p><strong>{types.map(s => s.label).join(', ') || this.state.typeInputs.placeholder}</strong></p>}
        </div>
        <div className="mt-5">
          <h5>Licences</h5>
          { this.state.licences.value.map(licence => {
              return (
                <div key={licence.id} className="d-flex justify-content-between">
                  <div>{licence.where}, {licence.since} (Licence # {licence.number})</div>
                  <div>
                    {/* <span className="btn btn-link mr-1" onClick={() => {this.startLEditing(licence)}}>Edit</span> */}
                    <span className="btn btn-link" onClick={() => {this.deleteL(licence.id)}}>Delete</span>
                  </div>
                </div>
              );
            }
          )}
          <span className="btn btn-link px-0" 
            onClick={() => {this.startAdding('licences', !this.state.licences.adding)}}
            >{ this.state.licences.adding ? 'Cancel' : 'Add Another Licence'}</span>

          { (this.state.licences.adding || this.state.licences.editing) && 
            <div className="bg-lighter px-3 py-4">
              <div className="row">
                <div className="col-sm-6">
                  <FormInput label="Licensed in?" type="text" id="licensedin" 
                    value={this.state.licences.curItem.where} name="where" onChange={this.handleLChange}
                    placeholder="Country / State / Provinence" noHelp/>

                  <FormInput label="Licence Number" type="number" id="licensednumber" 
                    value={this.state.licences.curItem.number} name="number" onChange={this.handleLChange} noHelp/>
                </div>
                <div className="col-sm-10">
                  <FormUpload dropColor="bg-white" label="Proof of license/admission to bar" id="proof" 
                    name="proofFile" onChange={this.handleLChange} noHelp />
                </div>
                <div className="col-sm-12"></div>
                <div className="col-sm-5">
                  <FormInput label="Licensed since" id="licensedsince" type="number"
                    value={this.state.licences.curItem.since} name="since" onChange={this.handleLChange} noHelp/>
                </div>
                <div className="col-sm-12">
                  <div className="p-4 text-right">
                    <button type="button" className="btn btn-primary px-5" 
                      onClick={() => {this.saveL()}}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          }
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
          { this.state.proexperiences.value.map(proexperience => {
              return (
                <div key={proexperience.id} className="d-flex justify-content-between">
                  <div>
                    <div className="font-weight-bold">{proexperience.title}</div>
                    <div>
                      <Moment format="YYYY MMMM">
                        {proexperience.fromDate}
                      </Moment>
                      {' - '}
                      { proexperience.present ?
                        'Present'
                        :
                        <Moment format="YYYY MMMM">
                          {proexperience.toDate}
                        </Moment>
                      }
                    </div>
                    <div>{proexperience.where}</div>
                    <div>{proexperience.description}</div>
                  </div>
                  <div>
                    <span className="btn btn-link mr-1" onClick={() => {this.startPEditing(proexperience)}}>Edit</span>
                    <span className="btn btn-link" onClick={() => {this.deleteP(proexperience.id)}}>Delete</span>
                  </div>
                </div>
              );
            }
          )}
          <span className="btn btn-link px-0" 
            onClick={() => {this.startAdding('proexperiences', !this.state.proexperiences.adding)}}
            >{ this.state.proexperiences.adding ? 'Cancel' : 'Add Another Experience'}</span>

          { (this.state.proexperiences.adding || this.state.proexperiences.editing) && 
            <div className="bg-lighter px-3 py-4">
              <div className="row">
                <div className="col-sm-4">
                  <FormDate label="From" id="pro-from-date" value={this.state.proexperiences.curItem.fromDate}
                    name="fromDate" onChange={this.handlePEChange} noHelp/>
                </div>
                <div className="col-sm-4">
                  <FormDate label="To" id="pro-to-date" value={this.state.proexperiences.curItem.toDate}
                    name="toDate" onChange={this.handlePEChange} noHelp readOnly={this.state.proexperiences.curItem.present}/>
                  <FormCheck id="pro-present" label="Present ?" value={this.state.proexperiences.curItem.present} 
                    name="present" onChange={this.handlePEChange}/>
                </div>
                <div className="col-sm-12"></div>
                <div className="col-sm-6">
                  <FormInput label="Title" type="text" id="pro-title" 
                    value={this.state.proexperiences.curItem.title} name="title" onChange={this.handlePEChange} noHelp/>
                  <FormInput label="Description" type="text" id="pro-type" 
                    value={this.state.proexperiences.curItem.description} name="description" onChange={this.handlePEChange} noHelp/>
                  <FormInput label="Where" type="text" id="pro-where" 
                    value={this.state.proexperiences.curItem.where} name="where" onChange={this.handlePEChange} noHelp/>
                </div>
                <div className="col-sm-12">
                  <div className="p-4 text-right">
                    <button type="button" className="btn btn-primary px-5" 
                      onClick={() => {this.savePE()}}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="mt-5">
          <h5>Publications</h5>
          { this.state.publications.value.map(publication => {
              return (
                <div key={publication.id} className="d-flex justify-content-between">
                  <div>
                    <div>{publication.title}</div>
                    <div>{publication.publisher}</div>
                    <div>
                      <Moment format="DD MMM YYYY">
                        {publication.date}
                      </Moment>
                    </div>
                    <div><a href={publication.url}>{publication.url}</a></div>
                  </div>
                  <div>
                    <span className="btn btn-link mr-1" onClick={() => {this.startPEditing(publication)}}>Edit</span>
                    <span className="btn btn-link" onClick={() => {this.deleteP(publication.id)}}>Delete</span>
                  </div>
                </div>
              );
            }
          )}
          <span className="btn btn-link px-0" 
            onClick={() => {this.startAdding('publications', !this.state.publications.adding)}}
            >{ this.state.publications.adding ? 'Cancel' : 'Add Another Publication'}</span>

          { (this.state.publications.adding || this.state.publications.editing) && 
            <div className="bg-lighter px-3 py-4">
              <div className="row">
                <div className="col-sm-6">
                  <FormInput label="Title" type="text" id="pub-title" 
                    value={this.state.publications.curItem.title} name="title" onChange={this.handlePChange} noHelp/>
                  <FormInput label="Association/Society/Bar/Institution" type="text" id="pub-type" 
                    value={this.state.publications.curItem.publisher} name="publisher" onChange={this.handlePChange} noHelp/>
                  <FormDate label="Date" id="pub-date" value={this.state.publications.curItem.date}
                    name="date" onChange={this.handlePChange} noHelp/>
                  <FormInput label="URL" type="url" id="pub-url" 
                    value={this.state.publications.curItem.url} name="url" onChange={this.handlePChange} noHelp/>
                </div>
                <div className="col-sm-12">
                  <div className="p-4 text-right">
                    <button type="button" className="btn btn-primary px-5" 
                      onClick={() => {this.saveP()}}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="mt-5">
          <h5>Memberships</h5>
          { this.state.memberships.value.map(membership => {
              return (
                <div key={membership.id} className="d-flex justify-content-between">
                  <div>
                    <div>{membership.title}, {membership.association}</div>
                    <div><a href={membership.url}>{membership.url}</a></div>
                  </div>
                  <div>
                    <span className="btn btn-link mr-1" onClick={() => {this.startMEditing(membership)}}>Edit</span>
                    <span className="btn btn-link" onClick={() => {this.deleteM(membership.id)}}>Delete</span>
                  </div>
                </div>
              );
            }
          )}
          <span className="btn btn-link px-0" 
            onClick={() => {this.startAdding('memberships', !this.state.memberships.adding)}}
            >{ this.state.memberships.adding ? 'Cancel' : 'Add Another Membership'}</span>

          { (this.state.memberships.adding || this.state.memberships.editing) && 
            <div className="bg-lighter px-3 py-4">
              <div className="row">
                <div className="col-sm-6">
                  <FormInput label="Title" type="text" id="member-title" 
                    value={this.state.memberships.curItem.title} name="title" onChange={this.handleMChange} noHelp/>
                  <FormInput label="Association/Society/Bar/Institution" type="text" id="member-type" 
                    value={this.state.memberships.curItem.association} name="association" onChange={this.handleMChange} noHelp/>
                  <FormInput label="URL" type="url" id="member-url" 
                    value={this.state.memberships.curItem.url} name="url" onChange={this.handleMChange} noHelp/>
                </div>
                <div className="col-sm-12">
                  <div className="p-4 text-right">
                    <button type="button" className="btn btn-primary px-5" 
                      onClick={() => {this.saveM()}}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { 
    academicDegrees, memberships, publications, proexperiences, 
    licences, specializations, lawyerTypes } = data;

  return { 
    userType, 
    userInfo, 
    user, 
    academicDegrees, 
    memberships, 
    publications, 
    proexperiences,
    licences,
    lawyerTypes,
    specializations
  };
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
