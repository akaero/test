using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using SuperTrafficLight.Repository;
using SuperTrafficLight.BLL;
using SuperTrafficLight.Model;
using SuperTrafficLight.Model.ResultModel;
using Moq;

namespace SuperTrafficLightTest.Tests.RepositoryTest
{
    [TestFixture]
    public class TfTest
    {
        Mock<IBankruptcyInfoRepository> BankruptcyInfoRepositoryMoq;
        Mock<IExcludeFromEgrulRepository> ExcludeFromEgrulRepositoryMoq;
        Mock<IExcludeFromGksRepository> ExcludeFromGksRepositoryMoq;
        Mock<ILegalCapacityRepository> LegalCapacityRepositoryMoq;
        Mock<IMinimumCapitalRepository> MinimumCapitalRepositoryMoq;
        Mock<IRegEgrulInfoItemRepository> RegEgrulInfoItemRepositoryMoq;
        Mock<IStopInfoItemRepository> StopInfoItemRepositoryMoq;
        Mock<IDisqualificationRepository> DisqualificationRepositoryMoq;
        Mock<IExecutiveAgencyDisqualificatedRepository> ExecutiveAgencyDisqualificatedRepositoryMoq;
        Mock<IDisqualifiedExecutiveAgencyInfoFromEgrulRepository> DisqualifiedExecutiveAgencyInfoFromEgrulRepositoryMoq;
        Mock<ILicenseRevocationRepository> LicenseRevocationRepositoryMoq;
        Mock<ICompanyIsInUnfairSuppliersRegistryRepository> CompanyIsInUnfairSuppliersRegistryRepositoryMoq;
        Mock<IProbableBankruptcyProcedureRepository> ProbableBankruptcyProcedureRepositoryMoq;
        Mock<IFinishedBankruptcyProcedureRepository> FinishedBankruptcyProcedureRepositoryMoq;
        Mock<IAffectingMessagesFromFedresursRepository> AffectingMessagesFromFedresursRepositoryMoq;
        Mock<IAffectingLegalCapacityInfoRepository> AffectingLegalCapacityInfoRepositoryMoq;
        Mock<IReductionOfShareCapitalInfoRepository> ReductionOfShareCapitalInfoRepositoryMoq;
        Mock<IAffectingMessagesFromEgrulRepository> AffectingMessagesFromEgrulRepositoryMoq;
        Mock<IYoungCompanyRegDateRepository> YoungCompanyRegDateRepositoryMoq;
        Mock<IEgrulAddressIsFakeRepository> EgrulAddressIsFakeRepositoryMoq;
        Mock<IRegularChangesOfTheLeaderRepository> RegularChangesOfTheLeaderRepositoryMoq;
        Mock<IRegularChangesOfTheConstitutorRepository> RegularChangesOfTheConstitutorRepositoryMoq;
        Mock<IRegularChangesOfTaxAccountingPlacesRepository> RegularChangesOfTaxAccountingPlacesRepositoryMoq;
        Mock<ILeadersAreMassiveRegistratorRepository> LeadersAreMassiveRegistratorRepositoryMoq;
        Mock<IConstitutorsAreMassiveRegistratorRepository> ConstitutorsAreMassiveRegistratorRepositoryMoq;
        Mock<IAdressOfRegistrationIsMassiveRepository> AdressOfRegistrationIsMassiveRepositoryMoq;
        Mock<ILeaderAndConstitutorAreTheSamePersonRepository> LeaderAndConstitutorAreTheSamePersonRepositoryMoq;
        Mock<IExecutiveBodyIsManagementCompanyRepository> ExecutiveBodyIsManagementCompanyRepositoryMoq;
        Mock<IConstitutorIsCompanyWichHasDisqualifiedPersonsInExecutiveBodyRepository> ConstitutorIsCompanyWichHasDisqualifiedPersonsInExecutiveBodyRepositoryMoq;
        Mock<IConstitutorHasExecutiveBodyWichIsDisqialifiedPersonRepository> ConstitutorHasExecutiveBodyWichIsDisqialifiedPersonRepositoryMoq;
        Mock<IGetConstitutorStoppingInfoRepository> GetConstitutorStoppingInfoRepositoryMoq;
        Mock<IForthcomingExclusionOfTheFounderAsInactiveFromEgrulInfoRepository> ForthcomingExclusionOfTheFounderAsInactiveFromEgrulInfoRepositoryMoq;
        Mock<IConstitutorIsUnderLiquidationRepository> ConstitutorIsUnderLiquidationRepositoryMoq;
        Mock<IOkvedHasIncreaseRiskLevelRepository> OkvedHasIncreaseRiskLevelRepositoryMoq;
        Mock<ILicenseRevocationFromCreditOrgRepository> LicenseRevocationFromCreditOrgRepositoryMoq;
        Mock<ISignificantClaimsInfoRepository> SignificantClaimsInfoRepositoryMoq;
        Mock<IArbitrationInfoRepository> ArbitrationInfoRepositoryMoq;
        Mock<ILackofAccountingInformationRepository> LackofAccountingInformationRepositoryMoq;
        Mock<IProvidingZeroReportingRepository> ProvidingZeroReportingRepositoryMoq;
        Mock<IMaterialLossesRepository> MaterialLossesRepositoryMoq;
        Mock<IInsufficiencyOfPropertyRepository> InsufficiencyOfPropertyRepositoryMoq;
        Mock<INegativeNetAssetsRepository> NegativeNetAssetsRepositoryMoq;
        Mock<IAssetReductionRepository> AssetReductionRepositoryMoq;
        Mock<ISignificantDecreaseInProfitsRepository> SignificantDecreaseInProfitsRepositoryMoq;
        Mock<IVolatileRevenuesRepsitory> VolatileRevenuesRepsitoryMoq;
        Mock<IReducedTaxBurdenRepository> ReducedTaxBurdenRepositoryMoq;
        Mock<IProceedsLessFixedAssetsRepository> ProceedsLessFixedAssetsRepositoryMoq;
        Mock<IReceivablesMoreProceedsRepository> ReceivablesMoreProceedsRepositoryMoq;
        Mock<ICreditsMoreProceedsRepository> CreditsMoreProceedsRepositoryMoq;
        Mock<IDefaultRepository> DefaultRepositoryMoq;
        Mock<ITaxArrearsRepository> TaxArrearsRepositoryMoq;
        Mock<ITaxOffensesRepository> TaxOffensesRepositoryMoq;
        Mock<IRulerFlBankruptcyRepository> RulerFlBankruptcyRepositoryMoq;
        Mock<IConstitutorFlBankruptcyRepository> ConstitutorFlBankruptcyRepositoryMoq;
        CompanyInfoItem company;
        
        [SetUp]
        public void Init()
        {
             BankruptcyInfoRepositoryMoq                                                = new Mock<IBankruptcyInfoRepository>();
             ExcludeFromEgrulRepositoryMoq                                              = new Mock<IExcludeFromEgrulRepository>();
             ExcludeFromGksRepositoryMoq                                                = new Mock<IExcludeFromGksRepository>();
             LegalCapacityRepositoryMoq                                                 = new Mock<ILegalCapacityRepository>();
             MinimumCapitalRepositoryMoq                                                = new Mock<IMinimumCapitalRepository>();
             RegEgrulInfoItemRepositoryMoq                                              = new Mock<IRegEgrulInfoItemRepository>();
             StopInfoItemRepositoryMoq                                                  = new Mock<IStopInfoItemRepository>();
             DisqualificationRepositoryMoq                                              = new Mock<IDisqualificationRepository>();
             ExecutiveAgencyDisqualificatedRepositoryMoq                                = new Mock<IExecutiveAgencyDisqualificatedRepository>();
             DisqualifiedExecutiveAgencyInfoFromEgrulRepositoryMoq                      = new Mock<IDisqualifiedExecutiveAgencyInfoFromEgrulRepository>();
             LicenseRevocationRepositoryMoq                                             = new Mock<ILicenseRevocationRepository>();
             CompanyIsInUnfairSuppliersRegistryRepositoryMoq                            = new Mock<ICompanyIsInUnfairSuppliersRegistryRepository>();
             ProbableBankruptcyProcedureRepositoryMoq                                   = new Mock<IProbableBankruptcyProcedureRepository>();
             FinishedBankruptcyProcedureRepositoryMoq                                   = new Mock<IFinishedBankruptcyProcedureRepository>();
             AffectingMessagesFromFedresursRepositoryMoq                                = new Mock<IAffectingMessagesFromFedresursRepository>();
             AffectingLegalCapacityInfoRepositoryMoq                                    = new Mock<IAffectingLegalCapacityInfoRepository>();
             ReductionOfShareCapitalInfoRepositoryMoq                                   = new Mock<IReductionOfShareCapitalInfoRepository>();
             AffectingMessagesFromEgrulRepositoryMoq                                    = new Mock<IAffectingMessagesFromEgrulRepository>();
             YoungCompanyRegDateRepositoryMoq                                           = new Mock<IYoungCompanyRegDateRepository>();
             EgrulAddressIsFakeRepositoryMoq                                            = new Mock<IEgrulAddressIsFakeRepository>();
             RegularChangesOfTheLeaderRepositoryMoq                                     = new Mock<IRegularChangesOfTheLeaderRepository>();
             RegularChangesOfTheConstitutorRepositoryMoq                                = new Mock<IRegularChangesOfTheConstitutorRepository>();
             RegularChangesOfTaxAccountingPlacesRepositoryMoq                           = new Mock<IRegularChangesOfTaxAccountingPlacesRepository>();
             LeadersAreMassiveRegistratorRepositoryMoq                                  = new Mock<ILeadersAreMassiveRegistratorRepository>();
             ConstitutorsAreMassiveRegistratorRepositoryMoq                             = new Mock<IConstitutorsAreMassiveRegistratorRepository>();
             AdressOfRegistrationIsMassiveRepositoryMoq                                 = new Mock<IAdressOfRegistrationIsMassiveRepository>();
             LeaderAndConstitutorAreTheSamePersonRepositoryMoq                          = new Mock<ILeaderAndConstitutorAreTheSamePersonRepository>();
             ExecutiveBodyIsManagementCompanyRepositoryMoq                              = new Mock<IExecutiveBodyIsManagementCompanyRepository>();
             ConstitutorIsCompanyWichHasDisqualifiedPersonsInExecutiveBodyRepositoryMoq = new Mock<IConstitutorIsCompanyWichHasDisqualifiedPersonsInExecutiveBodyRepository>();
             ConstitutorHasExecutiveBodyWichIsDisqialifiedPersonRepositoryMoq           = new Mock<IConstitutorHasExecutiveBodyWichIsDisqialifiedPersonRepository>();
             GetConstitutorStoppingInfoRepositoryMoq                                    = new Mock<IGetConstitutorStoppingInfoRepository>();
             ForthcomingExclusionOfTheFounderAsInactiveFromEgrulInfoRepositoryMoq       = new Mock<IForthcomingExclusionOfTheFounderAsInactiveFromEgrulInfoRepository>();
             ConstitutorIsUnderLiquidationRepositoryMoq                                 = new Mock<IConstitutorIsUnderLiquidationRepository>();
             OkvedHasIncreaseRiskLevelRepositoryMoq                                     = new Mock<IOkvedHasIncreaseRiskLevelRepository>();
             LicenseRevocationFromCreditOrgRepositoryMoq                                = new Mock<ILicenseRevocationFromCreditOrgRepository>();
             SignificantClaimsInfoRepositoryMoq                                         = new Mock<ISignificantClaimsInfoRepository>();
             ArbitrationInfoRepositoryMoq                                               = new Mock<IArbitrationInfoRepository>();
             LackofAccountingInformationRepositoryMoq                                   = new Mock<ILackofAccountingInformationRepository>();
             ProvidingZeroReportingRepositoryMoq                                        = new Mock<IProvidingZeroReportingRepository>();
             MaterialLossesRepositoryMoq                                                = new Mock<IMaterialLossesRepository>();
             InsufficiencyOfPropertyRepositoryMoq                                       = new Mock<IInsufficiencyOfPropertyRepository>();
             NegativeNetAssetsRepositoryMoq                                             = new Mock<INegativeNetAssetsRepository>();
             AssetReductionRepositoryMoq                                                = new Mock<IAssetReductionRepository>();
             SignificantDecreaseInProfitsRepositoryMoq                                  = new Mock<ISignificantDecreaseInProfitsRepository>();
             VolatileRevenuesRepsitoryMoq                                               = new Mock<IVolatileRevenuesRepsitory>();
             ReducedTaxBurdenRepositoryMoq                                              = new Mock<IReducedTaxBurdenRepository>();
             ProceedsLessFixedAssetsRepositoryMoq                                       = new Mock<IProceedsLessFixedAssetsRepository>();
             ReceivablesMoreProceedsRepositoryMoq                                       = new Mock<IReceivablesMoreProceedsRepository>();
             CreditsMoreProceedsRepositoryMoq                                           = new Mock<ICreditsMoreProceedsRepository>();
             DefaultRepositoryMoq                                                       = new Mock<IDefaultRepository>();
             TaxArrearsRepositoryMoq                                                    = new Mock<ITaxArrearsRepository>();
             TaxOffensesRepositoryMoq                                                   = new Mock<ITaxOffensesRepository>();
             RulerFlBankruptcyRepositoryMoq                                             = new Mock<IRulerFlBankruptcyRepository>();
             ConstitutorFlBankruptcyRepositoryMoq                                       = new Mock<IConstitutorFlBankruptcyRepository>();


             var taskEmptyList = new TaskCompletionSource<List<InfoItem>>();
             taskEmptyList.SetResult(new List<InfoItem>());
             BankruptcyInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ExcludeFromEgrulRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ExcludeFromGksRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             LegalCapacityRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             MinimumCapitalRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             RegEgrulInfoItemRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             StopInfoItemRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ExecutiveAgencyDisqualificatedRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             DisqualifiedExecutiveAgencyInfoFromEgrulRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             LicenseRevocationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             CompanyIsInUnfairSuppliersRegistryRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ProbableBankruptcyProcedureRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             FinishedBankruptcyProcedureRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             AffectingMessagesFromFedresursRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             AffectingLegalCapacityInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ReductionOfShareCapitalInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             AffectingMessagesFromEgrulRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             YoungCompanyRegDateRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             EgrulAddressIsFakeRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             RegularChangesOfTheLeaderRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             RegularChangesOfTheConstitutorRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             RegularChangesOfTaxAccountingPlacesRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             LeadersAreMassiveRegistratorRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ConstitutorsAreMassiveRegistratorRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             AdressOfRegistrationIsMassiveRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             LeaderAndConstitutorAreTheSamePersonRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ExecutiveBodyIsManagementCompanyRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ConstitutorIsCompanyWichHasDisqualifiedPersonsInExecutiveBodyRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ConstitutorHasExecutiveBodyWichIsDisqialifiedPersonRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             GetConstitutorStoppingInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ForthcomingExclusionOfTheFounderAsInactiveFromEgrulInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ConstitutorIsUnderLiquidationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             OkvedHasIncreaseRiskLevelRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             LicenseRevocationFromCreditOrgRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             SignificantClaimsInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ArbitrationInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             LackofAccountingInformationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ProvidingZeroReportingRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             MaterialLossesRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             InsufficiencyOfPropertyRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             NegativeNetAssetsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             AssetReductionRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             SignificantDecreaseInProfitsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             VolatileRevenuesRepsitoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ReducedTaxBurdenRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ProceedsLessFixedAssetsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ReceivablesMoreProceedsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             CreditsMoreProceedsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             DefaultRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             TaxArrearsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             TaxOffensesRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             RulerFlBankruptcyRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);
             ConstitutorFlBankruptcyRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskEmptyList.Task);

             company = new CompanyInfoItem();
             company.Inn = "fakeInn";
             company.Ogrn = "fakeOgrn";
             company.Ticker = "fakeTicker";
        }

        /// <summary>
        /// Создает LevelInfoRepository со моками, которые были установлены (по умолчанию везде пустой лист возвращается)
        /// </summary>
        /// <returns></returns>
        private LevelInfoRepository CreateMoqLevelRepository()
        {
            return  new LevelInfoRepository(
          MinimumCapitalRepositoryMoq.Object,
          StopInfoItemRepositoryMoq.Object,
          LegalCapacityRepositoryMoq.Object,
          ExcludeFromEgrulRepositoryMoq.Object,
          RegEgrulInfoItemRepositoryMoq.Object,
          BankruptcyInfoRepositoryMoq.Object,
          DisqualificationRepositoryMoq.Object,
          ExecutiveAgencyDisqualificatedRepositoryMoq.Object,
          DisqualifiedExecutiveAgencyInfoFromEgrulRepositoryMoq.Object,
          LicenseRevocationRepositoryMoq.Object,
          CompanyIsInUnfairSuppliersRegistryRepositoryMoq.Object,
          ProbableBankruptcyProcedureRepositoryMoq.Object,
          FinishedBankruptcyProcedureRepositoryMoq.Object,
          AffectingMessagesFromFedresursRepositoryMoq.Object,
          AffectingLegalCapacityInfoRepositoryMoq.Object,
          ReductionOfShareCapitalInfoRepositoryMoq.Object,
          AffectingMessagesFromEgrulRepositoryMoq.Object,
          YoungCompanyRegDateRepositoryMoq.Object,
          EgrulAddressIsFakeRepositoryMoq.Object,
          RegularChangesOfTheLeaderRepositoryMoq.Object,
          RegularChangesOfTheConstitutorRepositoryMoq.Object,
          RegularChangesOfTaxAccountingPlacesRepositoryMoq.Object,
          LeadersAreMassiveRegistratorRepositoryMoq.Object,
          ConstitutorsAreMassiveRegistratorRepositoryMoq.Object,
          AdressOfRegistrationIsMassiveRepositoryMoq.Object,
          LeaderAndConstitutorAreTheSamePersonRepositoryMoq.Object,
          ExecutiveBodyIsManagementCompanyRepositoryMoq.Object,
          ConstitutorIsCompanyWichHasDisqualifiedPersonsInExecutiveBodyRepositoryMoq.Object,
          ConstitutorHasExecutiveBodyWichIsDisqialifiedPersonRepositoryMoq.Object,
          GetConstitutorStoppingInfoRepositoryMoq.Object,
          ForthcomingExclusionOfTheFounderAsInactiveFromEgrulInfoRepositoryMoq.Object,
          ConstitutorIsUnderLiquidationRepositoryMoq.Object,
          OkvedHasIncreaseRiskLevelRepositoryMoq.Object,
          SignificantClaimsInfoRepositoryMoq.Object,
          LicenseRevocationFromCreditOrgRepositoryMoq.Object,
          LackofAccountingInformationRepositoryMoq.Object,
          ProvidingZeroReportingRepositoryMoq.Object,
          MaterialLossesRepositoryMoq.Object,
          InsufficiencyOfPropertyRepositoryMoq.Object,
          NegativeNetAssetsRepositoryMoq.Object,
          AssetReductionRepositoryMoq.Object,
          SignificantDecreaseInProfitsRepositoryMoq.Object,
          VolatileRevenuesRepsitoryMoq.Object,
          ReducedTaxBurdenRepositoryMoq.Object,
          ProceedsLessFixedAssetsRepositoryMoq.Object,
          ReceivablesMoreProceedsRepositoryMoq.Object,
          CreditsMoreProceedsRepositoryMoq.Object,
          DefaultRepositoryMoq.Object,
          TaxArrearsRepositoryMoq.Object,
          TaxOffensesRepositoryMoq.Object,
          RulerFlBankruptcyRepositoryMoq.Object,
          ConstitutorFlBankruptcyRepositoryMoq.Object,
          new SuperTrafficLight.Utils.CompanyInfoUtil()
              );
        }

        [Test]
        public async Task CheckThatAllRepositoriesReturnEmptyResult()
        {
            var companyData = new CompanyInfoItem();
            companyData.Inn ="7708797192";
            companyData.Ogrn= "1137746854794";
            companyData.Ticker = "TRFM";
            var levelInfoRep = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), levelInfoRep);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.LevelInfo.All(x => x.InfoItems.Count == 0));
        }

        [Test]
        public async Task ReplaceOneRepository()
        {
            var taskNotEmptyList = new TaskCompletionSource<List<InfoItem>>();
            taskNotEmptyList.SetResult ( new List<InfoItem>(){
                new ProceedsLessFixedAssetsInfoItem(){
                    FixedAssetsSum = 1234,
                    FixedAssetsSumRate= 20,
                    FixedAssetsSumLastYear = 12345,
                    BalanceYear=2019,
                    ProceedsSum = 43242,
                    ProceedsSumRate=13,
                    ProceedsSumLastYear = 2345}
                   
            });
            
            BankruptcyInfoRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(taskNotEmptyList.Task);
            var levelInfoRep = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), levelInfoRep);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.LevelInfo.Where(level => level.InfoItems.Count!=0).Count() == 1);
        }

        [Test]
        public async Task ScoreTest_FirstLevel_OneCheckEnable_Returns100()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem>{new StopInfoItem()});
            StopInfoItemRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult);
            var repository =  this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(),repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 100, "ожидалось 100, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_FirstLevel__OneCheckEnable_Returns90()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            ExcludeFromEgrulRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult);
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 90,  "ожидалось 90, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_FirstLevel_OneCheckEnable_Returns80()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult);
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 80, "ожидалось 80, вышло "+result.Rating);
        }

        [Test]
        public async Task ScoreTest_FirstLevel_TwoChecksEnable_Returns100()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            StopInfoItemRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); //100 points
            DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 100, "ожидалось 100, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_FirstLevel_TwoChecksEnable_Returns90()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            ExcludeFromEgrulRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 90 points
            DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 90, "ожидалось 90, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_SecondLevel_OneCheckEnable_Returns48()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            LicenseRevocationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 100 % of 60% of 80 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 48, "ожидалось 48, вышло "+result.Rating);
        }

        [Test]
        public async Task ScoreTest_SecondLevel_OneCheckEnable_Returns38()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            ProbableBankruptcyProcedureRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 % of 60% of 80 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 38, "ожидалось 38, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_SecondLevel_TwoChecksEnable_Returns48()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            LicenseRevocationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 100 % of 60% of 80 points
            ProbableBankruptcyProcedureRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 % of 60% of 80 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 48, "ожидалось 48, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_FirstLevel_OneCheck80PointsEnable_SecondLevel_OneCheckEnable_Returns92()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            LicenseRevocationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 100 % of 60% of 80 points
            DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 points first level
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 92, "ожидалось 92, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_ThirdLevel_OneCheckEnable_Returns6()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            FinishedBankruptcyProcedureRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 100 % of 40% of 20 points on third level
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 6, "ожидалось 6, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_ThirdLevel_TwoChecksEnable_Returns3()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            AffectingMessagesFromFedresursRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 50 % of 20% of 40% of 80points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 3, "ожидалось 3, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_Firstlevel_OneCheck80PointsEnable_ThirdLevel_OneCheckEnable_Returns81()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 points first level
            AffectingMessagesFromFedresursRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 50 % of 40% of 20% of 80 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 81, "ожидалось 81, вышло " + result.Rating);
        }

        [Test]
        public async Task ScoreTest_ZeroChecksEnable_Returns0()
        {
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 0, "ожидалось 0, вышло " + result.Rating);
        }


        [Test]
        public async Task ScoreTest_Firstlevel_OneCheck80PointsEnable_SecondLevel_OneCheckEnable_ThirdLevel_OneCheckEnable_Returns92()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 points first level
            LicenseRevocationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 100 % of 60% of 20 points
            ReceivablesMoreProceedsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 5% of 29% of 40% of 20 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 92, "ожидалось 92, вышло " + result.Rating);
        }


        [Test]
        public async Task ScoreTest_Firstlevel_OneCheck80PointsEnable_SecondLevel_OneCheckEnable_ThirdLevel_TwoChecksEnable_Returns93()
        {
            var notEmtyResult = Task.FromResult<List<InfoItem>>(new List<InfoItem> { new StopInfoItem() });
            DisqualificationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 80 points first level
            LicenseRevocationRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 100 % of 60% of 20 points
            ReceivablesMoreProceedsRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 5% of 29% of 40% of 20 points
            MaterialLossesRepositoryMoq.Setup(x => x.GetInfoItem(It.IsAny<CompanyInfoItem>())).Returns(notEmtyResult); // 20% of 29% of 40% of 20 points
            var repository = this.CreateMoqLevelRepository();
            var tf = new SuperTrafficLight.TrafficLight(new ExportRepository(), repository);
            var result = await tf.ExecuteResultsAsync("1137746854794");
            Assert.That(result.Rating == 93, "ожидалось 93, вышло " + result.Rating);
        }
    }
}
