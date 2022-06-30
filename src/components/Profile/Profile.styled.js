import styled from 'styled-components';

export const UserProfile = styled.div`
  margin: 0 auto;
  width: 300px;
  box-shadow: 0px 0px 10px -1px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const UserInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserImg = styled.img`
  display: block;
  border-radius: ${p => p.theme.radii.round};
  width: 150px;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.white};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[0]};
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.primary};
`;
export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.primary};
`;
export const StatsList = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.background};
`;
export const StatsItem = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[2]}px 0;
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
export const StatsNumber = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.black};
`;
export const StatsLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.black};
`;
