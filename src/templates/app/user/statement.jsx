import React from 'react';
import Loading from '../../_common/components/loading.jsx';

const Statement = () => (
    <React.Fragment>
        <div id='statement-container'>
            <div className='page-title' id='statement-title'>
                <h1>{it.L('Statement')}</h1>
                <p className='notice-msg center-text invisible' id='error-msg' />
            </div>
            <div id='account_statistics' className='gr-row invisible'>
                <div className='gr-3 gr-12-m'>
                    <p className='title'>{it.L('Account statistics')}</p>
                </div>
                <div className='gr-3 gr-12-m'>
                    <span className='hint'>{it.L('Total deposits')}</span>
                    <p id='total_deposits' />
                </div>
                <div className='gr-3 gr-12-m'>
                    <span className='hint'>{it.L('Total withdrawals')}</span>
                    <p id='total_withdrawals' />
                </div>
                <div className='gr-3 gr-12-m fill-bg-color'>
                    <span className='hint'>{it.L('Net deposit')}</span>
                    <p id='net_deposit' />
                </div>
            </div>
            <div className='gr-row gr-padding-10 invisible' id='util_row'>
                <div className='gr-12 gr-12-m'>
                    <div className='gr-row gr-gutter-right gr-row-align-right'>
                        <div className='label_form gr-gutter-right'>
                            <label>{it.L('Show all historical transactions up to')}:</label>
                        </div>
                        <div className='gr-gutter-right'>
                            <input type='text' id='date_to' size='20' readOnly='readonly' />
                        </div>
                    </div>
                </div>
                <div className='gr-12 gr-12-m align-end'>
                    <div id='download_csv' className='invisible'>{it.L('[_1] rows displayed:', '<span id=\'rows_count\'></span>')} <a href='javascript:;'>{it.L('Download CSV')}</a></div>
                </div>
            </div>
            <Loading />
        </div>
    </React.Fragment>
);

export default Statement;
