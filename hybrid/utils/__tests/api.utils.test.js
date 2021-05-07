import apiUtils from "../api.utils/api.utils";
import axios from 'axios';
import {correctLauchesApiResponse, correctlyReducedLaunchesData} from './api.util.mock';

describe('API utils tests', () => {
    describe('WHEN I want to get the failed launches for a given launchpad', () => {
        describe('AND data was NOT fetched correctly', () => {
            test('THEN I expect a falsy as return value', async () => {

                jest.spyOn(axios, 'post').mockImplementationOnce(() => Promise.resolve({status: 'Anything but 200'}));

                const mockedLaunchpadId = 'ID';
                await apiUtils.getFailedLaunches(mockedLaunchpadId).then(result => {
                    expect(result).toBeFalsy();
                });
            });
        });
        describe('AND an error occurred while fetching the data', () => {
            test('THEN I expect a falsy as return value', async () => {

                jest.spyOn(axios, 'post').mockImplementationOnce(() => throw new Error(''));

                const mockedLaunchpadId = 'ID';
                await apiUtils.getFailedLaunches(mockedLaunchpadId).then(result => {
                    expect(result).toBeFalsy();
                });
            });
        });
        describe('AND the raw data was fetched correctly', () => {
            test('THEN I expect the data to be reduced correctly', async () => {

                jest.spyOn(axios, 'post').mockImplementationOnce(() => Promise.resolve(correctLauchesApiResponse));

                const mockedLaunchpadId = 'ID';
                await apiUtils.getFailedLaunches(mockedLaunchpadId).then(result => {
                    expect(result).toEqual(correctlyReducedLaunchesData);
                });
            });
        });
    });
    describe('WHEN I want to get the starlinks satellites', () => {
        describe('AND data was NOT fetched correctly', () => {
            test('THEN I expect a falsy as return value', async () => {

                jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({status: 'Anything but 200'}));

                await apiUtils.getstarlinks().then(result => {
                    expect(result).toBeFalsy();
                });
            });
        });
        describe('AND an error occurred while fetching the data', () => {
            test('THEN I expect a falsy as return value', async () => {

                jest.spyOn(axios, 'get').mockImplementationOnce(() => throw new Error(''));

                await apiUtils.getstarlinks().then(result => {
                    expect(result).toBeFalsy();
                });
            });
        });
        describe('AND the raw data was fetched correctly', () => {
            test('THEN I expect the data to be reduced as expected', async () => {

                //1995
                //jul
                const starlink_10_jul_1995_1 = {spaceTrack: {LAUNCH_DATE: '1995-07-10'}, id: 1};
                const starlink_10_jul_1995_2 = {spaceTrack: {LAUNCH_DATE: '1995-07-10'}, id: 2};
                const starlink_10_jul_1995_3 = {spaceTrack: {LAUNCH_DATE: '1995-07-10'}, id: 3};

                const starlink_11_jul_1995_1 = {spaceTrack: {LAUNCH_DATE: '1995-07-11'}, id: 4};
                const starlink_11_jul_1995_2 = {spaceTrack: {LAUNCH_DATE: '1995-07-11'}, id: 5};
                const starlink_11_jul_1995_3 = {spaceTrack: {LAUNCH_DATE: '1995-07-11'}, id: 6};

                //1996
                //jul
                const starlink_10_jul_1996_1 = {spaceTrack: {LAUNCH_DATE: '1996-07-10'}, id: 7};
                const starlink_10_jul_1996_2 = {spaceTrack: {LAUNCH_DATE: '1996-07-10'}, id: 8};
                const starlink_10_jul_1996_3 = {spaceTrack: {LAUNCH_DATE: '1996-07-10'}, id: 9};

                const starlink_11_jul_1996_1 = {spaceTrack: {LAUNCH_DATE: '1996-07-11'}, id: 10};
                const starlink_11_jul_1996_2 = {spaceTrack: {LAUNCH_DATE: '1996-07-11'}, id: 11};
                const starlink_11_jul_1996_3 = {spaceTrack: {LAUNCH_DATE: '1996-07-11'}, id: 12};

                const mockedRawStarlinks = {
                    status: 200,
                    data: [starlink_10_jul_1995_1, starlink_10_jul_1995_2, starlink_10_jul_1995_3, starlink_11_jul_1995_1, starlink_11_jul_1995_2, starlink_11_jul_1995_3, starlink_10_jul_1996_1, starlink_10_jul_1996_2, starlink_10_jul_1996_3, starlink_11_jul_1996_1, starlink_11_jul_1996_2, starlink_11_jul_1996_3]
                };
                const correctlyReducedStarlinks = {
                    '1995': {
                        'july': {
                            '10': [starlink_10_jul_1995_1, starlink_10_jul_1995_2, starlink_10_jul_1995_3],
                            '11': [starlink_11_jul_1995_1, starlink_11_jul_1995_2, starlink_11_jul_1995_3],
                            days: ['10', '11']
                        },
                        months: ['july']
                    },
                    '1996': {
                        'july': {
                            '10': [starlink_10_jul_1996_1, starlink_10_jul_1996_2, starlink_10_jul_1996_3],
                            '11': [starlink_11_jul_1996_1, starlink_11_jul_1996_2, starlink_11_jul_1996_3],
                            days: ['10', '11']
                        },
                        months: ['july']
                    },
                    years: ['1995', '1996']
                };

                jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve(mockedRawStarlinks));

                await apiUtils.getstarlinks().then(result => {
                    expect(result).toEqual(correctlyReducedStarlinks);
                });
            });
        });
    });
});
